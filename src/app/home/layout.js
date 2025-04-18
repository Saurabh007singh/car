
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";




export default function Layout({children}){
    return <>
    
    <Header></Header>
   <main>{children}</main>
   <Footer></Footer>
    </>
}