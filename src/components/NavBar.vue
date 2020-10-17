<template>
  <b-navbar
    id="navb"
    sticky
    toggleable="lg"
    type="dark"
    variant="dark"
    class="z-depth-3"
  >
    <b-navbar-brand to="/">
      <img alt="Logo" src="../assets/Frame 5.svg" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/contents">Содержание</b-nav-item>
        <b-nav-item to="/contents/tests">Тесты</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Поиск"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Найти</b-button
          >
        </b-nav-form> -->

        <b-nav-item-dropdown text="RU" right>
          <b-dropdown-item href="#">KZ</b-dropdown-item>
          <b-dropdown-item href="#">EN</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>Пользователь</em>
          </template>
          <b-dropdown-item href="#">Профиль</b-dropdown-item>
          <b-dropdown-item href="#">Выйти</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
#navb {
  background-color: #37372b !important;
}
</style>
