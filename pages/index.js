import tw from "tailwind-styled-components"
import Map from "../components/Map"

const Index = () => {
    return (
        <Wrapper>
            <Map />

            <ActionItems />
        </Wrapper>
    )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`
const ActionItems = tw.div`
  bg-blue-500 flex-1
`

export default Index
