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
import { useParams } from "react-router-dom";
import "./FloatingButton.css";

const FloatingButton = ({
  style = {},
  onAdd,
  onEdit,
  onDelete,
  defaultImage,
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [deleteForm] = Form.useForm();
  const [editForm] = Form.useForm();
  const { type, sport } = useParams();

  // Estados para manejar la previsualización de imágenes
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  // Manejo de modales
  const handleOpenAddModal = () => setIsAddModalOpen(true);
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    form.resetFields();
    setFileList([]);
  };

  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true);
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    deleteForm.resetFields();
  };

  const handleOpenEditModal = () => setIsEditModalOpen(true);
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    editForm.resetFields();
    setFileList([]);
  };

  // Manejo de imágenes
  const handlePreview = async (file) => {
    setPreviewImage(file.url || URL.createObjectURL(file.originFileObj));
    setPreviewVisible(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const handleEditActivity = (values) => {
    const updatedActivity = {
      name: values.name,
      image: fileList[0]?.url || fileList[0]?.thumbUrl || defaultImage,
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

    onEdit(updatedActivity);
    handleCloseEditModal();
  };
  // Lógica para añadir actividad
  const handleAddActivity = (values) => {
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
      image: fileList[0]?.url || fileList[0]?.thumbUrl || defaultImage,
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

    onAdd(newActivity);
    handleCloseAddModal();
  };

  // Lógica para eliminar actividad
  const handleDeleteActivity = (values) => {
    onDelete(values.name);
    handleCloseDeleteModal();
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
          onClick={handleOpenAddModal}
        />
        <FloatButton
          icon={<EditOutlined />}
          tooltip="Modificar"
          onClick={onEdit}
        />
        <FloatButton
          icon={<DeleteOutlined />}
          tooltip="Eliminar"
          onClick={handleOpenDeleteModal}
        />
      </FloatButton.Group>

      {/* Modal para añadir actividad */}
      <Modal
        title="Añadir Actividad"
        open={isAddModalOpen}
        onCancel={handleCloseAddModal}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleAddActivity}>
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
              { required: true, message: "Seleccione la disponibilidad" },
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
            rules={[{ required: true, message: "Ingrese una descripción" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Latitud"
            name="latitude"
            rules={[{ required: true, message: "Ingrese la latitud" }]}
          >
            <InputNumber min={-90} max={90} step={0.0001} />
          </Form.Item>
          <Form.Item
            label="Longitud"
            name="longitude"
            rules={[{ required: true, message: "Ingrese la longitud" }]}
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

      {/* Modal para eliminar actividad */}
      <Modal
        title="Eliminar Actividad"
        open={isDeleteModalOpen}
        onCancel={handleCloseDeleteModal}
        onOk={() => deleteForm.submit()}
      >
        <Form
          form={deleteForm}
          layout="vertical"
          onFinish={handleDeleteActivity}
        >
          <Form.Item
            label="Nombre de la actividad a eliminar"
            name="name"
            rules={[{ required: true, message: "Ingrese el nombre" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {/* Modal para modificar actividad */}
      <Modal
        title="Modificar Actividad"
        open={isEditModalOpen}
        onCancel={handleCloseEditModal}
        onOk={() => editForm.submit()}
      >
        <Form form={editForm} layout="vertical" onFinish={handleEditActivity}>
          <Form.Item
            label="Nombre de la actividad"
            name="name"
            rules={[{ required: true, message: "Ingrese el nombre" }]}
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
              { required: true, message: "Seleccione la disponibilidad" },
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
            rules={[{ required: true, message: "Ingrese una descripción" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Latitud"
            name="latitude"
            rules={[{ required: true, message: "Ingrese la latitud" }]}
          >
            <InputNumber min={-90} max={90} step={0.0001} />
          </Form.Item>
          <Form.Item
            label="Longitud"
            name="longitude"
            rules={[{ required: true, message: "Ingrese la longitud" }]}
          >
            <InputNumber min={-180} max={180} step={0.0001} />
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal para previsualización */}
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
