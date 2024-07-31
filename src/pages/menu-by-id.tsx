import { Alert,Button, Container, Divider } from "@mantine/core";
import Layout from "../components/layout";
import { Link, useParams } from "react-router-dom";
import { Menu } from "../lib/models";
import useSWR from "swr";
import Loading from "../components/loading";
import { IconAlertTriangleFilled, IconEdit } from "@tabler/icons-react";

export default function MenuByIdPage() {
  const { menuID } = useParams();

  const { data: menu, isLoading, error } = useSWR<Menu>(`/menus/${menuID}`);

  return (
    <>
      <Layout>
        <Container className="mt-4">
          {isLoading && !error && <Loading />}
          {error && (
            <Alert
              color="red"
              title="เกิดข้อผิดพลาดในการอ่านข้อมูล"
              icon={<IconAlertTriangleFilled />}
            >
              {error.message}
            </Alert>
          )}

          {!!menu && (
            <>
              <h1>{menu.drink_name}</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <img
                  src={menu.image}
                  alt={menu.drink_name}
                  className="w-full object-cover aspect-[3/4]"
                />
                <div className="col-span-2 px-4 space-y-2 py-4">
                  <h3>ราคา</h3>
                  <p className="indent-4">
                    {menu.price}
                  </p>
                </div>
              </div>

              <Divider className="mt-4" />

              <Button
                color="blue"
                size="xs"
                component={Link}
                to={`/menus/${menu.id}/order`}
                className="mt-4"
                leftSection={<IconEdit />}
              >
                สั่งอาหาร
              </Button>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}
