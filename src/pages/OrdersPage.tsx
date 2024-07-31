import Layout from "../components/layout";
import useSWR from "swr";
import { Orders } from "../lib/models"; // แน่ใจว่า `Orders` ถูกนิยามใน models
import Loading from "../components/loading";
import { Alert, Button } from "@mantine/core";
import { IconAlertTriangleFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function OrdersPage() {
  const { data: orders, error } = useSWR<Orders[]>(`/orders`);

  return (
    <>
      <Layout>
        <section className="container mx-auto py-8">
          <div className="flex justify-between mb-4">
            <h1>รายการสั่งซื้อสำหรับเมนู</h1>
            <Button component={Link} to={`/menus`} size="xs" variant="default">
              กลับไปยังเมนู
            </Button>
          </div>

          {!orders && !error && <Loading />}
          {error && (
            <Alert
              color="red"
              title="เกิดข้อผิดพลาดในการอ่านข้อมูล"
              icon={<IconAlertTriangleFilled />}
            >
              {error.message}
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {orders?.map((order) => (
              <div className="border border-solid border-neutral-200 p-4" key={order.id}>
                <h2 className="text-lg font-semibold">Order ID: {order.id}</h2>
                <h2>{order.menu_name}</h2>
                <img src={order.menu_Image} />
                <p>จำนวน: {order.quantity}</p>
                <p>หมายเหตุ: {order.notes}</p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
