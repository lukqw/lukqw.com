<template>
  <div class="h-100 overflow-hidden d-flex flex-column">
    <div class="t1">
      lukqw
    </div>
    <b-card class="boxstyle">
      <b-card title="oefferl" footer-tag="footer">
        <b-card-text>
          public transportation monitor displayed on a
          <font-awesome-icon :icon="['fab', 'raspberry-pi']" size="lg" :style="{ color: '#b61040' }"/>
        </b-card-text>
        <template #footer>
          <div class="footer-box">
            <div class="fa-icon">
              <font-awesome-icon :icon="['fab', 'vuejs']" size='lg' :style="{ color: '#00c180' }"/>
            </div>
            <div class="link-box">
              <div class="fa-icon">
                <a href="https://oefferl.lukqw.com/" class="t-href">
                  <font-awesome-icon :icon="['fas', 'globe']" size="lg"/>
                </a>
              </div>
              <div class="fa-icon">
                <a href="https://www.github.com/lukqw/oefferl" class="t-href">
                  <font-awesome-icon :icon="['fab', 'github']" size="lg" :style="{ color: '#24292e' }"/>
                </a>
              </div>
            </div>
          </div>
        </template>
      </b-card>
      <b-card title="CoSt" footer-tag="footer">
        <b-card-text>
          collective studying platform developed for the course "Advanced Software Engineering PR"
        </b-card-text>
        <template #footer>
          <div class="footer-box">
            <div class="stack-box">
              <div class="fa-icon">
                <font-awesome-icon :icon="['fab', 'java']" size='lg' :style="{ color: '#ec2025' }"/>
              </div>
              <div class="fa-icon">
                <font-awesome-icon :icon="['fab', 'vuejs']" size='lg' :style="{ color: '#00c180' }"/>
              </div>
            </div>
            <div class="link-box">
              <div class="fa-icon">
                <a href="https://cost.lukqw.com/" class="t-href">
                  <font-awesome-icon :icon="['fas', 'globe']" size="lg"/>
                </a>
              </div>
            </div>
          </div>
        </template>
      </b-card>
      <b-card title="waecm" footer-tag="footer">
        <b-card-text>
          reddit bot developed for the course "Web Application Engineering and Content Management"
        </b-card-text>
        <template #footer>
          <div class="footer-box">
            <div class="stack-box">
              <div class="fa-icon">
                <font-awesome-icon :icon="['fab', 'react']" size='lg' :style="{ color: '#61dbfb' }"/>
              </div>
              <div class="fa-icon">
                <font-awesome-icon :icon="['fab', 'node-js']" size='lg' :style="{ color: '#76ad63' }"/>
              </div>
            </div>
            <div class="link-box">
              <div class="fa-icon">
                <a href="https://waecm.lukqw.com/" class="t-href">
                  <font-awesome-icon :icon="['fas', 'globe']" size="lg"/>
                </a>
              </div>
            </div>
          </div>
        </template>
      </b-card>
      <b-card title="barkr" footer-tag="footer">
        <b-card-text>
          iOS app developed for the course "Mobile Software Engineering"
        </b-card-text>
        <template #footer>
          <div class="footer-box">
            <div class="fa-icon">
              <font-awesome-icon :icon="['fab', 'swift']" size='lg' :style="{ color: '#ff422a' }"/>
            </div>
            <div class="link-box">
              <div class="fa-icon">
                <a href="https://www.github.com/lukqw/barkr" class="t-href">
                  <font-awesome-icon :icon="['fab', 'github']" size="lg" :style="{ color: '#24292e' }"/>
                </a>
              </div>
            </div>
          </div>
        </template>
      </b-card>
    </b-card>
    <div class="footer">
      <a href="https://www.github.com/lukqw" class="t-href-orange">
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
  color: #ed8605;
}

.card-text {
  color: #7d7d7d;
}

.t-href {
  color: #008eec;

  :hover {
    color: #0072ec;
  }
}

.t-href-orange {
  color: #ed8605;

  :hover {
    color: #ed6a05;
  }
}

.card {
  margin: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  scroll-snap-align: center;
  scroll-snap-stop: always;
}

.card-footer {
  background-color: unset;
  color: #0002ec;
}

.footer-box {
  display: flex;
  justify-content: space-between;
}

.fa-icon {
  margin: 0 10px;
}

.link-box, .stack-box {
  display: flex;
}

.boxstyle {
  width: 100%;
  height: 75%;
  overflow-y: auto;
  align-self: center;
  scroll-snap-type: y mandatory;

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
    height: 75%;
    width: 75%;
  }
}

@media (min-width: 1600px) and (min-height: 901px) {
  .boxstyle {
    width: 50% !important;
    height: 50% !important;
  }
  .t1 {
    height: 25%;
  }
  .footer {
    height: 25%;
  }
}

</style>

<script>
export default {
  name: 'Home'
}
</script>
