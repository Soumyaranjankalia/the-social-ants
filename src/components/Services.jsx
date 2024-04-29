import React from 'react'

function Services() {
  return (
    <div style={{background:'black', height:'100vh',padding:"0px 100px",display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{padding:'50px 0px'}}>
            <div>
                <p style={{color:'#D9CBED',fontSize:'45px',fontWeight:'700',lineHeight:'0px'}}>Our</p>
                <p style={{color:'#D9CBED',fontSize:'45px',fontWeight:'700',lineHeight:'0px'}}>Services</p>
            </div>
            <p style={{color:'white', textWrap:'wrap',width:'539px'}}>The Social Ants, where our mission is to transform your brand’s journey into an incredible narrative much like the intricate pathways of an ant colony. Like our tiny namesakes, we’re a dedicated team, each with a role crucial to the success of your brand’s story. Just as ants work collectively to build their colonies, we collaborate seamlessly to craft a digital landscape that echoes your brand’s unique essence.</p>
            <button style={{width:'124px',height:'39px',color:'white',borderRadius:'20px',background:'#2B1055',border:"none",marginTop:'10px'}}>
                Know More
            </button>
        </div>
        <div>
            <div style={{width:'300px',height:'300px',borderRadius:'20px',background:'#2B84F5',padding:'35px',display:'flex', justifyContent:'space-between',flexDirection:'column'}}>
                <p style={{color:'black',fontSize:'22px',lineHeight:0}}>BRANDING & MARKETING</p>
                <p style={{color:'black',fontSize:'30px',textWrap:'wrap',fontWeight:800}}>Turning Ideas into Brands, and Beands into legends.</p>
            </div>
        </div>
    </div>
  )
}

export default Services