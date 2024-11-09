import React from 'react'
import 'react-circular-progressbar/dist/styles.css'
import {
  InnerLayout,
  Layout,
  ProgressBarLayout,
  TextLayout,
} from 'src/components/ProgressBar/ProgressBar.styled'
import { ReactComponent as OutCircle } from 'src/assets/progressBar.svg'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

const ProgressBar = props => {
  return (
    <Layout>
      <InnerLayout>
        <OutCircle />
      </InnerLayout>
      <ProgressBarLayout>
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            strokeLinecap: 'round', // 둥근 끝 모양
            pathColor: `rgba(137, 176, 243, ${66 / 100})`, // 진행 바 색상 및 투명도
            textColor: '#FFFFFF',
            trailColor: '#FFFFFF',
            backgroundColor: '#89B0F3',
            //TODO: 색깔 상의
            strokeWidth: 3, // 진행 바 두께
          })}
        />
      </ProgressBarLayout>
      <TextLayout>{props.text} 달성률</TextLayout>
    </Layout>
  )
}

export default ProgressBar
