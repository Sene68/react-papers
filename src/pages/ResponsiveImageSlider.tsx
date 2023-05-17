import slider_img_1 from '../src_assets/image1.jpg'

export const ResponsiveImageSlider = () => {

    const screenStyle = {
        background: `linear-gradient(135deg, #8052ec, #d161ff)`,
    }

    return(
        <div style={screenStyle} className="w-full h-screen">
            <div className="w-[60%] min-w-[520px] p-[30px] bg-white absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 rounded-xl shadow-lg flex flex-col items-center">
                <div className="relative w-full border-[1px] border-solid border-black">
                    <img className="relative" src={slider_img_1} alt=""/>
                </div>
            </div>
        </div>
    )
}