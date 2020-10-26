<template>
  <div class="h-100 d-flex flex-column">
    <div class="t1">
      lukqw
    </div>
    <b-card class="boxstyle">
        <b-card title="oefferl" footer-tag="footer">
          <b-card-text>
            public transportation monitor displayed on a
            <font-awesome-icon :icon="['fab', 'raspberry-pi']" size="lg"/>
          </b-card-text>
          <template #footer>
            <font-awesome-icon :icon="['fab', 'vuejs']" size='lg'/>
            <div class="float-right">
              <div class="link-box">
              <a href="https://lukqw.com/oefferl/" class="t-href">
                <font-awesome-icon :icon="['fas', 'globe']" size="lg"/>
              </a>
              <a href="https://www.github.com/lukqw/oefferl" class="t-href">
                <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
              </a>
              </div>
            </div>
          </template>
        </b-card>
        <b-card>

        </b-card>
        <b-card>

        </b-card>
        <b-card>

        </b-card>
    </b-card>
    <div class="footer">
      <a href="https://www.github.com/lukqw" class="t-href">
        <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">

/*
* {
  box-sizing: border-box;
}
*/

.t1 {
  font-size: 30px;
  line-height: 30px;
  height: 12.5%;
}

.card-title {
  color: #ea00eb;
}

.card {
  margin: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.card-footer {
  background-color: unset;
}


.link-box {
  > * {
    margin-left: 15px;
  }
}

.boxstyle {
  -webkit-box-shadow: 0px 0px 30px 5px rgba(231, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 30px 5px rgba(231, 0, 0, 0.5);
  box-shadow: 0px 0px 30px 5px rgba(231, 0, 0, 0.5);
  width: 100%;
  height: 75%;
  overflow-y: auto;
  align-self: center;
  scroll-snap-type: y mandatory;
  scroll-padding: calc(1.25rem + 10px);
  > .card-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  > .card-body > .card:last-child {
    margin-bottom: calc(1.25rem + 10px);
  }
}

.footer {
  height: 12.5%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

@media (min-width: 768px) {
  .card {
    width: calc(50% - 20px);
    height: calc(50% - 20px);
  }
  .boxstyle {
    width: 50%;
    height: 50%;
  }
  .t1 {
    height: 25%;
  }
  .footer {
    height: 25%;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}


</style>

<script>
export default {
  name: 'Home'
}
</script>
