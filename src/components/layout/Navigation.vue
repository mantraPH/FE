<template>
  <div>
    <v-app-bar app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      :color="theme"
      dark>
      <v-toolbar-title class="toggle-menu"
        @click="showDrawerNav">
        <v-icon v-if="drawer">mdi-backburger</v-icon>
        <v-icon v-else>mdi-format-align-justify</v-icon>
      </v-toolbar-title>
      <h2 class="ml-3 mt-1">ORDERNETA</h2>
      <v-row class="ml-2">
        <v-col class="ml-12">
            <!-- v-debounce:500ms="fetchSearchData" -->
          <v-text-field flat
            solo-inverted
            hide-details
            prepend-inner-icon="search"
            label="Search"
            class="hidden-sm-and-down" />
        </v-col>
      </v-row>
      <div class="flex-grow-1"></div>
      <v-menu bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text md
            :style="{width: isMobile ? '110px' : '110px'}"
            v-on="on">
            <div class="ml-n3">
              <v-avatar class="mt-n1" >
                <v-icon>mdi-account-tie-voice</v-icon>
              </v-avatar>
              <!-- <span class="username">{{ $session.get('firstName') }}</span> -->
              <span class="username">Jay</span>
              <v-icon>mdi-menu-down</v-icon>
            </div>
          </v-btn>  
        </template>
        <v-list dense>
          <div v-for="(item, index) in profile"
            :key="index">
            <v-list-item
              :key="item.title"
              @click="goToLink(item.title)">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content class="ml-n1">
                <v-list-item-title>
                  <b>{{ item.title }}</b> 
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app>
      <v-row>
        <v-col class="mt-n3">
          <v-list nav dense>
          <v-list-item-group v-model="item"
            :color="theme">
            <v-list-item
              v-for="(item, i) in navigation"
              :to="item.link"
              :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  <b>{{ item.title }}</b>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {
        drawer: true,
        theme: 'primary',
        navigation: [
          { id: 1, title: 'Stores', icon: 'mdi-bank', link: '/stores',  userLevel: [] },
          { id: 2, title: 'Products', icon: 'mdi-basket-fill', link: '/products',  userLevel: [] },
          { id: 3, title: 'Clients', icon: 'mdi-account-badge-horizontal-outline', link: '/clients',  userLevel: [] },
          { id: 4, title: 'Users', icon: 'mdi-account-switch', link: '/users',  userLevel: [] }
        ],
        profile: [
          { title: 'Profile', icon: 'mdi-id-card' },
          { title: 'Sign Out', icon: 'mdi-music' }
        ],
        item: 0
      }
    },

    methods: {
      isNavActive (link) {
        return link.split('/')[1] === this.$route.fullPath.split('/')[1]
      },

      goToLink (title) {
        if (title === 'Profile') {
          this.$router.push(`/Profile-Information/${this.SESSION_DATA.Id}`)
          return false
        }

        if(title === this.$route.fullPath) return
        if (title === 'Sign Out') {
          this.$session.destroy()
          this.$router.push('/')
        }
      }
    }
  }
</script>
<style>
.btn-menu {
  width: 35px !important;
}
.username {
  font-size: 15px;
  margin-left: -5px;
}
.active-nav {
  background-color: #dfdfdf;
  color: #fff;
}
.toggle-menu {
  cursor: pointer;
  transform: scale(1.3);
}
.toggle-menu:hover{
  transition: ease-in-out .3s;
  transform: scale(1.5);
}
</style>
