<template>
  <div class="container mt-5">
    <div class="row g-3 mb-3">
      <div class="col-10">
        <input type="text" class="form-control" id="inputAddress2" placeholder="Agregue sus tareas" v-model="task">
      </div>
      <div class="col-2">
        <button class="btn btn-primary w-100" @click="addTask">
          <v-icon name="io-add-circle-outline"></v-icon>
        </button>
      </div>
    </div>
    <div scope="col">Tareas</div>
    <div v-for="(tarea, i) in tasks" :key="i" class="flex justify-between my-3 shadow p-1 rounded bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
      <div class="p-1 font-semibold">{{ tarea.title }}</div>
      <div>
        <button class="btn shadow-inner hover:bg-red-500 mx-1" @click="removeTask(i)">
          <v-icon name="md-deleteoutline"></v-icon>
        </button>
        <button type="button" class="btn shadow-inner hover:bg-sky-700 mx-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="editTask(i)">
          <v-icon name="hi-solid-pencil-alt"></v-icon>
        </button>
      </div>
    </div>
  </div>

  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar tarea</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <v-icon name="ri-delete-back-2-fill"></v-icon>
        </button>
      </div>
      <div class="modal-body">
        <div class="row g-3 mb-3">
          <div class="col-10">
            <input type="text" class="form-control bg-none" id="inputAddress2" placeholder="Edite el nombre de la tarea" v-model="taskModal">
          </div>
          <div class="col-2">
            <button class="btn shadow-inner bg-sky-700 hover:bg-sky-500 w-100" @click="edit()">
              <v-icon name="gi-confirmed"></v-icon>
            </button>
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
</script>