const form = document.querySelector("[data-request-form]");

if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const requester = new FormData(form).get("requester");
    if (typeof requester !== "string" || requester.trim().length < 3) {
      form.querySelector("[data-error]")?.replaceChildren(
        "Type a requester name of at least three characters, then continue.",
      );
      return;
    }
    window.location.assign("/review");
  });
}
