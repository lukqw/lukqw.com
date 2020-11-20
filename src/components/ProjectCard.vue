<template>
  <b-card :title=project.title footer-tag="footer">
    <b-card-text v-html="project.description">
    </b-card-text>
    <template #footer>
      <div class="footer-box">
        <div class="stack-box">
          <div class="fa-icon" v-for="icon in project.langIcons" :key="icon">
            <font-awesome-icon :icon="[icon.type, icon.name]" size='lg'/>
          </div>
        </div>
        <div class="link-box">
          <div class="fa-icon" v-if="project.website">
            <a :href=project.website class="t-href">
              <font-awesome-icon :icon="['fas', 'globe']" size="lg"/>
            </a>
          </div>
          <div class="fa-icon" v-if="project.github">
            <a :href=project.github class="t-href">
              <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
            </a>
          </div>
        </div>
      </div>
    </template>
  </b-card>
</template>
<style scoped lang="scss">
.fa-vuejs {
  color: #00c180;
}

.fa-github {
  color: #24292e;
}

.fa-java {
  color: #ec2025;
}

.fa-swift {
  color: #ff422a;
}

.fa-react {
  color: #61dbfb;
}

.fa-node-js {
  color: #76ad63;
}

.fa-raspberry-pi {
  color: #B61040;
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
}

@media (min-width: 768px) {
  .card {
    width: calc(50% - 20px);
    height: calc(50% - 20px);
  }
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
</style>
<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      title: String,
      description: String,
      langIcons: [Object],
      website: String,
      github: String
    }
  }
}
</script>
