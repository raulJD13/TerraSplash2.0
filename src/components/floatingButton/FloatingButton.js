import {
  PlusOutlined,
  FileAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons"; // Iconos de Ant Design
import { FloatButton } from "antd";
import "./FloatingButton.css";

const FloatingButton = ({ style = {}, onAdd, onEdit, onDelete }) => {
  return (
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{
        bottom: 140, // Ajusta para subir
        right: 24,
      }}
      icon={<PlusOutlined />}
      size="large"
    >
      {/* Botones secundarios */}
      <FloatButton
        icon={<FileAddOutlined />} // Añadir archivo
        tooltip="Añadir archivo"
        onClick={onAdd} // Acción para añadir archivo
      />
      <FloatButton
        icon={<EditOutlined />} // Modificar
        tooltip="Modificar"
        onClick={onEdit} // Acción para modificar
      />
      <FloatButton
        icon={<DeleteOutlined />} // Eliminar
        tooltip="Eliminar"
        onClick={onDelete} // Acción para eliminar
      />
    </FloatButton.Group>
  );
};

export default FloatingButton;
