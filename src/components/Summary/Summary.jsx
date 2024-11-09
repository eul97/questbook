import {
  Detail,
  DividerLayout,
  ImageDividerLayout,
  ImageLayout,
  InfoLayout,
  Layout,
  Name,
  ProgressBarLayout,
  ThumbnailLayout,
} from 'src/components/Summary/Summary.styled'
import { ReactComponent as Divider } from 'src/assets/summaryDivider.svg'
import { ReactComponent as Rhombus } from 'src/assets/rhombus.svg'
import { ReactComponent as ImageDivider } from 'src/assets/imageDivider.svg'
import { ProgressBar } from 'src/components'
import Thumbnail from 'src/components/Thumbnail/Thumbnail'

const Summary = props => {
  const onClickSummary = () => {
    if (props.type === 'select') {
      console.log('click 이벤트 ! ' + props.character.characterId)
      props.onClickSummary(props.character.characterId)
    }
  }

  return (
    <Layout type={props.type} onClick={onClickSummary}>
      <ImageLayout>
        <Name>{props.character.nickname}</Name>
        <ThumbnailLayout>
          <Thumbnail job={props.character.job} />
        </ThumbnailLayout>
        <ImageDividerLayout>
          <ImageDivider />
        </ImageDividerLayout>
      </ImageLayout>
      <InfoLayout>
        <Detail>
          {props.character.world}
          <Rhombus />
          {props.character.level}
          <Rhombus /> {props.character.job}
        </Detail>
        <DividerLayout>
          <Divider />
        </DividerLayout>
        <ProgressBarLayout>
          <ProgressBar value={props.character.dailyRate} text="데일리" />
          <ProgressBar value={props.character.weeklyRate} text="위클리" />
          <ProgressBar value={props.character.monthlyRate} text="먼슬리" />
        </ProgressBarLayout>
      </InfoLayout>
    </Layout>
  )
}
export default Summary
