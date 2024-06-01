import React, { useState } from 'react';
import Header from '../../components/homescreen/headerhomescreen/headerhomescreen';
import Table from '../../components/homescreen/homescreentable/homescreentable';
import ModalAddNew from '../../components/homescreen/modaladdnew/modaladdnew';
import ModalEdit from '../../components/homescreen/modaledit/modaledit';
import PopupDelete from '../../components/homescreen/popupdelete/popupdelete';
import { HomeContainer } from './homescreenstyles';
import api from '../../services/api/api';

const HomeScreen: React.FC = () => {
  const [showAddNew, setShowAddNew] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  const handleDelete = async () => {
    if (selectedEmployee) {
      try {
        await api.delete(`/funcionario/${selectedEmployee.id}`);
        // Atualize a lista de funcionários aqui, se necessário
        setShowDelete(false);
        window.location.reload(); // Recarregar a página para refletir a mudança
      } catch (error) {
        console.error('Error deleting employee', error);
      }
    }
  };

  return (
    <HomeContainer>
      <Header onAddNew={() => setShowAddNew(true)} />
      <Table
        onEdit={(employee: any) => {
          setSelectedEmployee(employee);
          setShowEdit(true);
        }}
        onDelete={(employee: any) => {
          setSelectedEmployee(employee);
          setShowDelete(true);
        }}
      />
      {showAddNew && <ModalAddNew onClose={() => setShowAddNew(false)} />}
      {showEdit && <ModalEdit onClose={() => setShowEdit(false)} employee={selectedEmployee} />}
      {showDelete && <PopupDelete onClose={() => setShowDelete(false)} onDelete={handleDelete} />}
    </HomeContainer>
  );
};

export default HomeScreen;
