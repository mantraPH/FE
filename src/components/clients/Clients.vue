<template>
 <div>
  <v-row class="mt-2">
    <v-col cols="12"
      class="mt-2">
      <h2 class="primary--text">CLIENT LIST</h2>
    </v-col>
  </v-row>
  <v-row class="mt-n7">
    <v-col cols="12">
      <v-simple-table class="table-top-border">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Image</th>
              <th>Fullname</th>
              <th>Store</th>
              <th>Mobile No.</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in clientList"
              :key="item.name">
              <td width="10%">
                <img :src="item.image"
                  class="mt-1">
              </td>
              <td>{{ item.fname + ' ' + item.mname + ' ' + item.lname }}</td>
              <td>{{ item.store }}</td>
              <td>{{ item.mobile }}</td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary"
                      v-on="on"
                      small>
                      <v-icon>mdi-file-document-edit-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Update Client</span>
                </v-tooltip>

                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary"
                      v-on="on"
                      class="ml-1"
                      small>
                      <v-icon>mdi-format-align-justify</v-icon>
                    </v-btn>
                  </template>
                  <span>Client Information</span>
                </v-tooltip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
 </div>
</template>

<script>
export default {
  name: 'Stores',
  data () {
    return {
      clientList: [
        {
          store: 'Jollibee Magic Mall',
          fname: 'Test 1',
          mname: 'Middle Name 1',
          lname: 'Last Name 1',
          mobile: 9213763620,
          landline: '568-457-098',
          image: require('@/assets/stores/jollibee.png')
        },
        {
          store: 'Jollibee Magic Mall',
          fname: 'Test 1',
          mname: 'Middle Name 1',
          lname: 'Last Name 1',
          mobile: 9213763620,
          landline: '568-457-098',
          image: require('@/assets/stores/jollibee.png')
        },
        {
          store: 'Jollibee Magic Mall',
          fname: 'Test 1',
          mname: 'Middle Name 1',
          lname: 'Last Name 1',
          mobile: 9213763620,
          landline: '568-457-098',
          image: require('@/assets/stores/greenwich.png')
        },
        {
          store: 'Jollibee Magic Mall',
          fname: 'Test 1',
          mname: 'Middle Name 1',
          lname: 'Last Name 1',
          mobile: 9213763620,
          landline: '568-457-098',
          image: require('@/assets/stores/jollibee.png')
        },
        {
          store: 'Jollibee Magic Mall',
          fname: 'Test 1',
          mname: 'Middle Name 1',
          lname: 'Last Name 1',
          mobile: 9213763620,
          landline: '568-457-098',
          image: require('@/assets/stores/jollibee.png')
        },
        {
          store: 'Jollibee Magic Mall',
          fname: 'Test 1',
          mname: 'Middle Name 1',
          lname: 'Last Name 1',
          mobile: 9213763620,
          landline: '568-457-098',
          image: require('@/assets/stores/chowking.png')
        },
        {
          store: 'Jollibee Magic Mall',
          fname: 'Test 1',
          mname: 'Middle Name 1',
          lname: 'Last Name 1',
          mobile: 9213763620,
          landline: '568-457-098',
          image: require('@/assets/stores/greenwich.png')
        }
      ]
    }
  }
}
</script>
<style scoped>
.image-preview {
  border: 1px solid #7777;
  width: 100%;
}
.border-red >>> fieldset {
  border: 1px solid red;
}
.border-red >>> .ql-toolbar.ql-snow {
  border: 1px solid red !important;
}
.border-red >>> .ql-container.ql-snow {
  border-right: 1px solid red !important;
  border-left: 1px solid red !important;
  border-bottom: 1px solid red !important;
}
.quillWrapper {
  width: 100%;
}
img {
  width: 70%;
  border-radius: 65%;
}
</style>