import { useEffect } from "react"
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl"

mapboxgl.accessToken =
    "pk.eyJ1IjoidGhlYXNzZXQiLCJhIjoiY2tyb3V1ZTZmMWpsMDJubDdha2lsbXYxeSJ9.A_zwqkPVPGP75uNMSHlzNQ"

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [44, 36.2],
            zoom: 12,
        })
    }, [])

    return <Wrapper id='map'></Wrapper>
}

const Wrapper = tw.div`
    flex-1
`

export default Map
