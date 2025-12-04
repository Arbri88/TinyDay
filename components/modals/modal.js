export const Modal = {
  open(id) {
    document.getElementById(id).classList.remove("hidden");
  },
  close(id) {
    document.getElementById(id).classList.add("hidden");
  }
};
