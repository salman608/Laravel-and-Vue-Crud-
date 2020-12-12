<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Product Category List</h5>
                        <router-link :to="{name:'category_create'}" class="btn btn-primary">Add Category</router-link>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <th style="width: 100px" scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Slug</th>
                                <th style="width: 170px" scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="category in categories" :key="category.id">
                                <th style="width: 100px" scope="row">{{category.id}}</th>
                                <td>{{category.name}}</td>
                                <td>{{category.slug}}</td>
                                <td style="width: 170px">
                                    <router-link :to="{name:'category_edit',params: {id: category.id}}" class="btn-sm btn btn-primary">Edit</router-link>
                                    <a @click.prevent="deleteCategory(category)" href="#" class="btn-sm btn btn-warning">Delete</a>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            categories:[],
        }
    },
    methods:{
        loadCategories(){
            axios.get('/api/category').then(response=>{
                this.categories=response.data;
            });
        },
        deleteCategory(category){
          axios.delete(`/api/category/${category.id}`).then(()=>{
            this.$toast.success({
                title:'Success',
                message:'Category Delete Successfully'
            });
          });
          let index=this.categories.indexOf(category);
          this.categories.splice(index,1);
        }
    },
    mounted() {
        this.loadCategories();
    }
}
</script>
