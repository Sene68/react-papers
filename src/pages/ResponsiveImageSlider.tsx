import slider_img_1 from '../src_assets/s_image1.jpg'
import slider_img_2 from '../src_assets/s_image2.jpg'
import slider_img_3 from '../src_assets/s_image3.jpg'

export const ResponsiveImageSlider = () => {

    const screenStyle = {
        background: `linear-gradient(135deg, #8052ec, #d161ff)`,
    }

    return(
        <div style={screenStyle} className="w-full h-screen">
            <div className="w-[60%] min-w-[520px] p-[30px] bg-white absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 rounded-xl shadow-lg flex flex-col items-center">
                <div className="relative w-full border-[1px] border-solid border-black">
                    <img className="relative w-full block" src={slider_img_1} alt=""/>
                    <img className="relative w-full hidden" src={slider_img_2} alt=""/>
                    <img className="relative w-full hidden" src={slider_img_3} alt=""/>
                </div>
                <div className="w-[150px] mt-[20px] flex items-center justify-around">
                    <button className="bg-transparent w-[13px] h-[13px] rounded-full border-[3px] border-solid border-[#8052ec]"></button>
                    <button className="bg-transparent w-[13px] h-[13px] rounded-full border-[3px] border-solid border-[#8052ec]"></button>
                    <button className="bg-transparent w-[13px] h-[13px] rounded-full border-[3px] border-solid border-[#8052ec]"></button>
                </div>
                <button className="w-[40px] h-[40px] absolute bg-[#8052ec] text-white m-auto inset-y-0 border-none rounded-sm font-bold text-lg left-[15px]"> &lt; </button>
                <button className="w-[40px] h-[40px] absolute bg-[#8052ec] text-white m-auto inset-y-0 border-none rounded-sm font-bold text-lg right-[15px]"> &gt; </button>
            </div>
        </div>
    )
}