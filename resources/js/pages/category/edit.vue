<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Product Category Edit-{{categoryForm.name}}</h5>
                        <router-link :to="{name:'category_list'}" class="btn btn-primary">View Category</router-link>
                    </div>

                    <div class="card-body">
                        <form @submit.prevent="updateCategory">
                            <div class="form-group">
                                <label for="name">Category Name</label>
                                <input type="text" v-model="categoryForm.name" class="form-control" name="name" placeholder="Category Name"
                                       :class="{ 'is-invalid': categoryForm.errors.has('name') }">
                                <has-error :form="categoryForm" field="name"></has-error>
                            </div>

                            <button type="submit" class="btn btn-primary">Update Category</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Form} from 'vform'
export default {
    data(){
        return{
            categoryForm: new Form({
                name: '',
            }),
        }
    },
    methods:{
        updateCategory(){
            let id=this.$route.params.id;
            this.categoryForm.put(`/api/category/${id}`).then(() => {
                this.$toast.success({
                    title:'Success',
                    message:'Category Update Successfully'
                });
            })
        },
        loadCategory(){
            let id=this.$route.params.id;
            axios.get(`/api/category/${id}/edit`).then(response=>{
               this.categoryForm.name=response.data.name;
            });
        }
    },
    mounted() {
        this.loadCategory();
    }
}
</script>
