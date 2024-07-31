import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Modal, NumberInput, Textarea, Alert } from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';

const OrderForm: React.FC = () => {
  const { menuID } = useParams<{ menuID: string }>();
  const navigate = useNavigate();
  const [quantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      await axios.post(`/menus/${menuID}/order`, {
        quantity,
        notes   
      });
      notifications.show({
        title: 'สั่งอาหารสำเร็จ',
        message: 'คำสั่งซื้อของคุณถูกส่งเรียบร้อยแล้ว',
        color: 'teal',
      });
      navigate(`/menus/${menuID}`); // นำทางกลับไปยังหน้าเมนู
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 400) {
          setError('ข้อมูลที่ส่งไม่ถูกต้อง');
        } else if (err.response?.status === 404) {
          setError('ไม่พบข้อมูลที่เกี่ยวข้อง');
        } else {
          setError('เกิดข้อผิดพลาดบางอย่าง');
        }
      } else {
        setError('เกิดข้อผิดพลาดบางอย่าง');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal opened={true} onClose={() => navigate(-1)} title="สั่งอาหาร">
      {error && <Alert color="red">{error}</Alert>}
      <NumberInput
        label="จำนวน"
        value={quantity}
        min={1}
        step={1}
        placeholder="กรอกจำนวนที่ต้องการ"
        required
      />
      <Textarea
        label="หมายเหตุ"
        placeholder="กรอกคำขอเพิ่มเติม"
        value={notes}
        onChange={(e) => setNotes(e.currentTarget.value)}
      />
      <Button
        color="blue"
        onClick={handleSubmit}
        loading={isSubmitting}
        fullWidth
      >
        ส่งคำสั่งซื้อ
      </Button>
    </Modal>
  );
};

export default OrderForm;
