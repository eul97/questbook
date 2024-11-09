import { Image } from 'src/components/Thumbnail/Thumbnail.styled'

const koreanToEnglishMap = {
  나이트로드: 'nightLord',
  나이트워커: 'nightWalker',
  다크나이트: 'darkKnight',
  데몬슬레이어: 'demonSlayer',
  데몬어벤져: 'demonAvenger',
  듀얼블레이더: 'dualBlader',
  라라: 'lala',
  루미너스: 'ruminus',
  메르세데스: 'mercedes',
  메카닉: 'mechanic',
  미하일: 'mihael',
  바이퍼: 'viper',
  배틀메이지: 'battleMage',
  보우마스터: 'bowMaster',
  블래스터: 'blaster',
  비숍: 'bishop',
  소울마스터: 'soulMaster',
  스트라이커: 'striker',
  신궁: 'bowGod',
  아델: 'adele',
  아란: 'aran',
  아크: 'ark',
  '아크메이지(불,독)': 'flameArkMage',
  '아크메이지(썬,콜)': 'thunderArkMage',
  어쌔신: 'assassin',
  에반: 'evan',
  엔젤릭버스터: 'angelBuster',
  와일드헌터: 'wildHunter',
  윈드브레이커: 'windBreaker',
  은월: 'silverMoon',
  일리움: 'illium',
  제논: 'zenon',
  제로: 'zero',
  카데나: 'kadena',
  카이저: 'kaiser',
  카인: 'kain',
  칼리: 'kali',
  캐논마스터: 'canonShooter',
  캡틴: 'captain',
  키네시스: 'kinesis',
  팔라딘: 'paladin',
  패스파인더: 'pathFinder',
  팬텀: 'phantom',
  플레임위자드: 'flameWizard',
  호영: 'hoYoung',
  히어로: 'hero',
}
const Thumbnail = props => {
  const imageName = koreanToEnglishMap[props.job] || 'unknown'
  const imageSrc = `${process.env.PUBLIC_URL}/images/illust/${imageName}.png`

  return (
    <div>
      <Image src={imageSrc} alt={props.job} />
    </div>
  )
}
export default Thumbnail
