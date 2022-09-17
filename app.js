Vue.createApp({
  data() {
    return {
      placeholderString: "Введите название заметки",
      title: "Список заметок",
      inputValue: "",
      notes: ["Заметка1", "Заметка2"],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },

    toUpperCase(item) {
      return item.toUpperCase();
    },

    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = "";
      }
    },
  },
}).mount("#app");
