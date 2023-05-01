import profile_img from '../src_assets/384-original.jpg'

export const CardWithDynamicTheme = () => {
    const cardBackground = {
        background: "linear-gradient(to bottom, #ff1756 110px, #ffffff 110px)"
    }

    return(
        <div className="absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2">
            <div style={cardBackground} className="w-[320px] h-[420px] rounded-xl py-[50px] shadow-lg text-center tracking-[.5px] font-semibold">
                <img className="block w-[100px] h-[100px] relative rounded-full m-0 m-auto shadow-[0_0_0_8px_rgb(255,255,255)]" src={profile_img} alt=""/>
                <h4 className="font-mono text-[#ff1756] text-base mt-[15px] mb-[5px]">Sene</h4>
                <h5 className="font-mono text-[#454545] font-normal text-sm">Developer?</h5>
                <div className="w-full mt-[30px] flex justify-around">
                    <div>
                        <h2 className="font-mono font-normal">1.6K</h2>
                        <span className="font-mono text-[#ff1756]">Followers</span>
                    </div>
                    <div>
                        <h2 className="font-mono font-normal">852</h2>
                        <span className="font-mono text-[#ff1756]">Following</span>
                    </div>
                </div>
                <div className="w-full mt-[30px] flex justify-around">
                    <button className="font-mono w-[130px] py-2 rounded-3xl border-[3px] border-solid border-[#ff1756] bg-[#ff1756] text-white">Follow</button>
                    <button className="font-mono w-[130px] py-2 rounded-3xl border-[3px] border-solid border-[#ff1756] bg-transparent text-[#ff1756]">Message</button>
                </div>
            </div>
        </div>
    )
}