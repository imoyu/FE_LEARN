export const m1 = {
  mounted() {
    console.log('mounted ...');
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};

export const m2 = {
  data() {
    return {
      x: 10,
      y: 20,
    };
  },
};