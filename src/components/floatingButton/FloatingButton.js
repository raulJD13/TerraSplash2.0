import {
  PlusOutlined,
  FileAddOutlined,
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  FloatButton,
  Modal,
  Form,
  Input,
  Select,
  Upload,
  InputNumber,
} from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom"; // Importa useParams
import "./FloatingButton.css";

const FloatingButton = ({ style = {}, onAdd, onEdit, onDelete, defaultImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { type, sport } = useParams(); // Extrae type y sport de la URL

  // Estados para manejar previsualización de imágenes
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    form.resetFields();
    setFileList([]); // Resetea la lista de archivos al cerrar
  };

  const handlePreview = async (file) => {
    setPreviewImage(file.url || URL.createObjectURL(file.originFileObj));
    setPreviewVisible(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleFormSubmit = (values) => {
    if (!type || !sport) {
      console.error("Error: type o sport no están definidos.");
      return;
    }

    const activityRoute = `/activities/${type}/${sport}/${values.name
      .replace(/\s+/g, "-")
      .toLowerCase()}`;

    const newActivity = {
      name: values.name,
      rating: 0,
      route: activityRoute,
      image: fileList[0]?.url || fileList[0]?.thumbUrl || defaultImage, // Usar URL de la imagen cargada
      details: {
        location: values.location,
        difficulty: values.difficulty,
        distance: values.distance,
        availability: values.availability,
        description: values.description,
        latitude: values.latitude,
        longitude: values.longitude,
      },
    };

    onAdd(newActivity); // Llamar la función para agregar la actividad
    handleCloseModal();
  };

  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          bottom: 140,
          right: 24,
        }}
        icon={<PlusOutlined />}
        size="large"
      >
        <FloatButton
          icon={<FileAddOutlined />}
          tooltip="Añadir actividad"
          onClick={handleOpenModal}
        />
        <FloatButton
          icon={<EditOutlined />}
          tooltip="Modificar"
          onClick={onEdit}
        />
        <FloatButton
          icon={<DeleteOutlined />}
          tooltip="Eliminar"
          onClick={onDelete}
        />
      </FloatButton.Group>

      <Modal
        title="Añadir Actividad"
        open={isModalOpen}
        onCancel={handleCloseModal}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item
            label="Nombre de la actividad"
            name="name"
            rules={[{ required: true, message: "Por favor ingrese el nombre" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ubicación"
            name="location"
            rules={[
              { required: true, message: "Por favor ingrese la ubicación" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Dificultad"
            name="difficulty"
            rules={[{ required: true, message: "Seleccione la dificultad" }]}
          >
            <Select>
              <Select.Option value="easy">Fácil</Select.Option>
              <Select.Option value="medium">Intermedia</Select.Option>
              <Select.Option value="hard">Difícil</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Distancia (km)"
            name="distance"
            rules={[
              { required: true, message: "Por favor ingrese la distancia" },
            ]}
          >
            <InputNumber min={0} step={0.1} />
          </Form.Item>
          <Form.Item
            label="Disponibilidad"
            name="availability"
            rules={[
              {
                required: true,
                message: "Por favor seleccione la disponibilidad",
              },
            ]}
          >
            <Select>
              <Select.Option value="all-year">Todo el año</Select.Option>
              <Select.Option value="summer">Verano</Select.Option>
              <Select.Option value="winter">Invierno</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Descripción"
            name="description"
            rules={[
              { required: true, message: "Por favor ingrese una descripción" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Latitud"
            name="latitude"
            rules={[
              { required: true, message: "Por favor ingrese la latitud" },
            ]}
          >
            <InputNumber min={-90} max={90} step={0.0001} />
          </Form.Item>
          <Form.Item
            label="Longitud"
            name="longitude"
            rules={[
              { required: true, message: "Por favor ingrese la longitud" },
            ]}
          >
            <InputNumber min={-180} max={180} step={0.0001} />
          </Form.Item>
          <Form.Item
            label="Imagen"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          >
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              beforeUpload={() => false}
              className="rounded-image-upload"
            >
              {fileList.length >= 1 ? null : (
                <div>
                  <UploadOutlined /> Subir Imagen
                </div>
              )}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        visible={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img alt="Vista previa" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default FloatingButton;
