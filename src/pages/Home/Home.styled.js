import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  position: relative;

  width: 1180px;
  height: 740px;
`

export const BorderLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`

export const SlideLayout = styled.div`
  position: absolute;
  top: 0;
  left: 40px;

  display: flex;
  flex-direction: row;

  align-items: center;
  width: 100%;
  height: 100%;
`

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  min-width: 1080px;
  width: 1080px;
  height: 80%;

  gap: 20px;
`

export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')}; // 보이지 않아도 공간을 차지
`

export const ArrowLeft = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 22.5px solid rgba(255, 255, 255, 0.7); // 흰색에 가까운 투명색
`

export const ArrowRight = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 22.5px solid rgba(255, 255, 255, 0.7); // 흰색에 가까운 투명색
`

export const BlurText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};

  text-shadow: 0 0 20px rgba(255, 255, 255, 0.7);

  margin-bottom: 20px;
`
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title2};
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`

export const Detail = styled.div`
  margin-top: 20px;

  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: 600;
  //text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  color: ${({ theme }) => theme.color.white};
`
