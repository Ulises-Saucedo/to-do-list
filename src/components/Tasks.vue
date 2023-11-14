<template>
  <div class="container mt-5">
    <div class="row g-3 mb-3">
      <div class="col-10">
        <input type="text" class="form-control" id="inputAddress2" placeholder="Agregue sus tareas" v-model="task">
      </div>
      <div class="col-2">
        <button class="btn btn-primary w-100" @click="addTask">Agregar tarea</button>
      </div>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Tareas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tarea, i) in tasks" :key="i" :class="{ 'table-success': tarea.isSelected }" @dblclick="toggleSelection(i)">
          <td class="col-10">{{ tarea.title }}</td>
          <td class="col-2 d-flex justify-content-end align-items-center">
            <button class="btn btn-danger me-3" @click="removeTask(i)">Eliminar</button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="editTask(i)">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar tarea</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row g-3 mb-3">
          <div class="col-10">
            <input type="text" class="form-control" id="inputAddress2" placeholder="Edite el nombre de la tarea" v-model="taskModal">
          </div>
          <div class="col-2">
            <button class="btn btn-primary w-100" @click="edit()">Editar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
  import { ref } from 'vue';
  let tasks = ref([])
  let taskModal = ref("")
  let task = ref("")
  let id = ref(0)
  let editingIndex = ref(null);
  let editedTask = ref("");

  const addTask = () =>{
    tasks.value.push({
      id: id.value++,
      title: task.value
    });
    task.value = ""
  }

  const removeTask = (i) =>{
    tasks.value.splice(i, 1);
  }

  const edit = () =>{
    tasks.value[editingIndex].title = taskModal.value
  }

  const editTask = (i) =>{
    editedTask = tasks.value[i].title 
    taskModal.value = tasks.value[i].title 
    editingIndex = i
  }

  const toggleSelection = (index) => {
    tasks.value[index].isSelected = !tasks.value[index].isSelected;
  };
</script>