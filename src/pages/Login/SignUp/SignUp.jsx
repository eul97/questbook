import {
  AgreeLayout,
  BlurText,
  BorderLayout,
  Button,
  ContentLayout,
  Layout,
  RowLayout,
  SmallButton,
  TermsLabel,
  TermsLayout,
  TermsTitle,
  TextLabel,
} from 'src/pages/Login/Login.styled'
import { ReactComponent as Border } from 'src/assets/border.svg'
import { Input } from 'src/components'
import { useEffect, useState } from 'react'
import { emailRegister, singIn, verifyEmail } from 'src/api/accountAPI'
import { getAuthorization } from 'src/api/commonAPI'
import { useNavigate } from 'react-router-dom'

const SignUp = props => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputRegisterKey, setInputRegisterKey] = useState('')
  const [emailFlag, setEmailFlag] = useState(false)
  const [emailChangeFlag, setEmailChangeFlag] = useState(true)
  const [emailRegisterFlag, setEmailRegisterFlag] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordCheckInput, setPasswordCheckInput] = useState('')
  const [isAgreed, setIsAgreed] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    console.log('signup.jsx')
    const loginToken = getAuthorization()
    if (loginToken === null) {
      console.log('로그인 안되어있음')
      props.setLoginState(false)
    } else {
      console.log('로그인 되어있음')
      props.setLoginState(true)
      alert('잘못된 접근입니다.')
      navigate('/character')
    }
  }, [])
  
  const onClickRegisterEmailButton = () => {
    console.log(inputEmail)
    if (inputEmail === null || inputEmail === '') {
      alert('이메일을 입력하세요')
      return
    }

    emailRegister(inputEmail).then(data => {
      alert('이메일 전송이 완료되었습니다')
      console.log(data)
      setEmailFlag(true)
      setEmailChangeFlag(false)
    })
    //TODO: 코드 10분간 유효 세션처리
  }

  const conClickRegisterCheckButton = () => {
    console.log(inputEmail)
    console.log(inputRegisterKey)
    verifyEmail(inputEmail, inputRegisterKey).then(data => {
      alert('인증이 완료되었습니다')
      setEmailRegisterFlag(true)
    })
    //TODO: 인증 실패 시 예외처리
  }

  const onClickConfirmButton = () => {
    if (emailRegisterFlag === false) {
      alert('이메일 인증을 완료해주세요')
      return
    }
    if (passwordInput !== passwordCheckInput) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }
    //TODO: 예외처리 좀 더 상세하게
    //비밀번호 조합 정규식 처리
    singIn(inputEmail, passwordInput).then(data => {
      alert('회원가입이 완료되었습니다')
    })
  }

  const onClickAgreeButton = () => {
    setIsAgreed(true)
  }

  const displayTerms = () => {
    return (
      <ContentLayout>
        <BlurText>이용 약관</BlurText>
        <TermsLayout>
          <TermsTitle>[개인정보 수집과 이용에 대한 동의]</TermsTitle>
          <TermsLabel>
            QuestBook은 이용자의 개인정보를 소중히 다루며, 관련 법령에 따라 개인정보를 안전하게
            관리하고 있습니다.
          </TermsLabel>
          <TermsLabel>
            본 동의서는 이메일을 이용한 로그인 및 기타 서비스 제공을 위해 이용자의 개인정보를 수집,
            이용하는 것에 대한 동의를 구하는 내용입니다.
          </TermsLabel>
          <TermsTitle>1. 수집하는 자</TermsTitle>
          <TermsLabel>- QuestBook</TermsLabel>
          <TermsTitle>2. 수집하는 개인정보 항목</TermsTitle>
          <TermsLabel>- 이메일 주소</TermsLabel>
          <TermsTitle>3. 개인정보 수집 및 이용 목적</TermsTitle>
          <TermsLabel>- 회원 가입 및 로그인 인증</TermsLabel>
          <TermsLabel>- 본인 확인 및 계정 보호</TermsLabel>
          <TermsLabel>- 고객 지원 및 문의 처리</TermsLabel>
          <TermsTitle>4. 개인정보 보유 및 이용 기간</TermsTitle>
          <TermsLabel>- 이용자의 개인정보는 서비스 이용 기간 동안 보유 및 이용됩니다.</TermsLabel>
          <TermsLabel>
            - 회원 탈퇴 요청 시, 또는 개인정보 수집 및 이용 목적이 달성된 후에는 관련 법령에 따라
            일정 기간 동안 보관 후 지체 없이 파기됩니다.
          </TermsLabel>
          <TermsTitle>5. 동의를 거부할 권리 및 불이익</TermsTitle>
          <TermsLabel>
            - 이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다.
          </TermsLabel>
          <TermsLabel>
            - 단, 동의를 거부할 경우 해당 서비스를 이용할 수 없음을 알려드립니다.
            <br />
            <br />
          </TermsLabel>
        </TermsLayout>
        <AgreeLayout>
          <TermsTitle>본인은 위 내용을 충분히 이해하였으며, 이에 동의합니다. </TermsTitle>
          <SmallButton
            onClick={() => {
              setIsAgreed(true)
            }}
          >
            동의합니다
          </SmallButton>
        </AgreeLayout>
      </ContentLayout>
    )
  }

  const displaySignUp = () => {
    return (
      <ContentLayout>
        <BlurText>회원가입</BlurText>
        <TextLabel>이메일</TextLabel>
        <RowLayout>
          <Input
            placeholder="이메일"
            marginTop={'10px'}
            type={'email'}
            value={inputEmail}
            onChange={e => setInputEmail(e.target.value)}
            disabled={!emailChangeFlag}
          />
          <SmallButton onClick={onClickRegisterEmailButton}>인증번호 전송</SmallButton>
        </RowLayout>
        <TextLabel>인증번호 확인</TextLabel>
        <RowLayout>
          <Input
            placeholder="인증번호"
            marginTop={'10px'}
            value={inputRegisterKey}
            onChange={e => setInputRegisterKey(e.target.value)}
            disabled={!emailFlag}
          />
          <SmallButton onClick={conClickRegisterCheckButton} disabled={!emailFlag}>
            인증 확인
          </SmallButton>
        </RowLayout>
        <TextLabel>비밀번호</TextLabel>
        <Input
          placeholder="비밀번호"
          marginTop={'10px'}
          type={'password'}
          onChange={e => setPasswordInput(e.target.value)}
        />
        <TextLabel>비밀번호 확인</TextLabel>
        <Input
          placeholder="비밀번호"
          marginTop={'10px'}
          type={'password'}
          onChange={e => setPasswordCheckInput(e.target.value)}
        />
        <Button onClick={onClickConfirmButton}>완료</Button>
      </ContentLayout>
    )
  }

  return (
    <Layout>
      <BorderLayout>
        <Border />
      </BorderLayout>
      {isAgreed ? displaySignUp() : displayTerms()}
    </Layout>
  )
}
export default SignUp
