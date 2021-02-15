<template>
  <div>
    <Jumbotron />

    <Login />

    <Footer />
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron";
import Footer from "@/components/Footer";
// import NavigationHome from "@/components/NavigationHome";
// import Quotes from "@/components/Quotes";
import Login from "@/components/Login";

export default {
  components: {
    Jumbotron,
    // NavigationHome,
    Footer,
    // Quotes,
    Login
  },
};
</script>

<style scoped>
#tulacafe {
  background: url(https://tulacafe.ru/assets/splash-bg.jpg);
  background-size: cover;
  background-position: center;
}

#massage {
  background: url(https://caring-hands.github.io/images/services-bg.jpg);
  background-size: cover;
  background-position: center;
}

#elenapro {
  background: url(../assets/img/makeup3.jpg);
  background-size: cover;
  background-position: center;
}

#bulatdesign {
  background: url(../assets/img/bulat.png);
  background-size: cover;
  background-position: center;
}

#vingil {
  background: url(../assets/img/vingil1.jpg);
  background-size: cover;
  background-position: center;
}

#y-math {
}

#ad-economics {
}

.frozed {
  filter: blur(2px);
}
</style>
