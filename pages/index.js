import tw from "tailwind-styled-components"
import Map from "../components/Map"
import { SiUber } from "react-icons/si"
import { FaUserCircle, FaCar, FaBiking, FaCalendarAlt } from "react-icons/fa"
const Index = () => {
    return (
        <Wrapper>
            {/* map wrapper */}
            <Map />

            {/* Action Items Wrapper */}
            <ActionItems>
                {/* ===================================== */}
                {/* HEADER */}
                {/* ===================================== */}
                <Header>
                    {/* Uber Logo */}
                    <SiUber size={44} />

                    {/* Profile */}
                    <Profile>
                        {/* Profile Name */}
                        <Name>Darbaz Ali</Name>
                        {/* Profile Photo */}
                        <FaUserCircle size={34} />
                    </Profile>
                </Header>

                {/* ===================================== */}
                {/* ACTION BUTTONS */}
                {/* ===================================== */}
                <ActionButtons>
                    <ActionButton>
                        <ActionButtonImage>
                            <FaCar size={34} />
                        </ActionButtonImage>
                        Ride
                    </ActionButton>
                    <ActionButton>
                        {" "}
                        <ActionButtonImage>
                            <FaBiking size={34} />
                        </ActionButtonImage>
                        Wheels
                    </ActionButton>
                    <ActionButton>
                        <ActionButtonImage>
                            <FaCalendarAlt size={34} />
                        </ActionButtonImage>
                        Reserve
                    </ActionButton>
                </ActionButtons>

                {/* ===================================== */}
                {/* INPUT BUTTONS */}
                {/* ===================================== */}
                <InputButton>Where to?</InputButton>
            </ActionItems>
        </Wrapper>
    )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`
const ActionItems = tw.div`
  bg-white flex-1 p-4
`

const Header = tw.div`
    flex justify-between items-center
`

const Profile = tw.div`
    flex flex-row items-center
`
const Name = tw.div`
    mr-4 text-sm
`

const ActionButtons = tw.div`
    flex justify-between mt-4
`

const ActionButton = tw.button`
    bg-gray-200 flex-1 m-1 flex flex-col 
    p-4 justify-between items-center text-xl
    rounded transform hover:scale-105 transition
`
const ActionButtonImage = tw.div`
    h-3/5
    mb-4
`

const InputButton = tw.div`
    h-20 bg-gray-200 text-2xl p-4
    flex items-center mt-8 rounded
`

export default Index
