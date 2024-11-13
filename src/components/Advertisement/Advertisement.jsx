import { useEffect, useRef } from 'react'

const Advertisement = props => {
  const scriptElementWrapper = useRef(null)
  console.log(props.unit)
  console.log(props.width)

  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://t1.daumcdn.net/kas/static/ba.min.js')
    script.setAttribute('async', 'true')
    scriptElementWrapper.current?.appendChild(script)

    return () => {
      const globalAd = 'adfit' in window ? window.adfit : null
      if (globalAd) globalAd.destroy(props.unit)
    }
  }, [])

  return (
    <div ref={scriptElementWrapper} style={{ marginLeft: props.marginLeft }}>
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={props.unit}
        data-ad-width={props.width}
        data-ad-height={props.height}
      />
    </div>
  )
}
export default Advertisement
