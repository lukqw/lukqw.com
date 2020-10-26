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
          <div class="footer-box">
            <div class="fa-icon">
              <font-awesome-icon :icon="['fab', 'vuejs']" size='lg'/>
            </div>
            <div class="link-box">
              <div class="fa-icon">
                <a href="https://lukqw.com/oefferl/" class="t-href">
                  <font-awesome-icon :icon="['fas', 'globe']" size="lg"/>
                </a>
              </div>
              <div class="fa-icon">
                <a href="https://www.github.com/lukqw/oefferl" class="t-href">
                  <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
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
                <font-awesome-icon :icon="['fab', 'java']" size='lg'/>
              </div>
              <div class="fa-icon">
                <font-awesome-icon :icon="['fab', 'vuejs']" size='lg'/>
              </div>
            </div>
            <div class="link-box">
              <div class="fa-icon">
                <a href="https://lukqw.com/CoSt/" class="t-href">
                  <font-awesome-icon :icon="['fas', 'globe']" size="lg"/>
                </a>
              </div>
              <div class="fa-icon">
                <a href="https://www.github.com/lukqw/CoSt" class="t-href">
                  <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
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
            <div class="fa-icon">
              <font-awesome-icon :icon="['fab', 'react']" size='lg'/>
            </div>
            <div class="link-box">
              <div class="fa-icon">
                <a href="https://lukqw.com/waecm/" class="t-href">
                  <font-awesome-icon :icon="['fas', 'globe']" size="lg"/>
                </a>
              </div>
              <div class="fa-icon">
                <a href="https://www.github.com/lukqw/waecm2020ss" class="t-href">
                  <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
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
              <font-awesome-icon :icon="['fab', 'swift']" size='lg'/>
            </div>
            <div class="link-box">
              <div class="fa-icon">
                <a href="https://www.github.com/lukqw/barkr" class="t-href">
                  <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
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
  color: #e70000;
}

.card-text {
  color: #ea00eb;
}

.t-href {
  color: #0002ec;

  :hover {
    color: #00018d;
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
  scroll-snap-align: start;
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
