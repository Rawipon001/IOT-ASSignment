import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-1.jpg";
import coffeeImage from "../assets/images/coffee-1.jpg";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ว่าไงเพื่อนๆ ยินดีต้อนรับนะได้เวลาเข้าสู่เว็บไก่ๆของเราแล้วแหละ</h1>
      </section>

      <section className="container mx-auto py-8">
        <h1>ได้เวลาเตรียมตัวแล้วแหละ</h1>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-left col-span-2">
          เอาล่ะได้เวลาเข้าสู่คาเฟ่ของเราแหละ เตรียมตัวเตรียมใจให้พร้อมได้เวลาได้เจอกับประสบการ์ณของเว็บไก่ๆกุ๊กๆแล้วแหละ
          </p>

        </div>
        <p className="text-right mt-8">
          ปัจจุบันคาเฟ่และเว็บนี้ที่ไก่จัดและหนังสือทุกเล่นฉัน นายรวิพล สอาดโพธิ์ทอง 65070197 เป็นคนดูแลเองแหละ
          ซึ่งมีบริการการสั่งกาแฟสุดเฟี้ยวที่คุณกินแล้วถ่ายคล่องแน่นอนแต่ที่สำคัญคือสมมุติว่าคุณที่เป็นลูกค้าแล้วอยู่ดีๆอยากเป็นพนักงานขึ้นมา
          คุณก็สามารถเปลี่ยนเสื้อผ้าที่หลังร้านแล้วเข้าระบบพนักงานได้เลยถ้าคุณเงินไม่พอจ่ายโดยที่คุณไม่ต้องเข้ารหัสเลยด้วยซ้ำ
          และถ้าคุณตายังไม่แข็งพอคุณสามารถสั่งออเดอร์เครื่องดื่มได้แบบเต็มที่โดยที่ราคามันอาจจะซื้อแลมโบกินี่ได้เลยด้วยซ้ำแตคุณกลับมาซื้อกาแฟ
          ราคาเครื่องดื่มก็ถือว่าราคานักศึกษา (แลกเปลี่ยน)
        </p>
      </section>

      <section className="w-100px flex justify-center">
        <img src={coffeeImage} alt="Coffee" className="w-100px" />
      </section>
    </Layout>
  );
}
