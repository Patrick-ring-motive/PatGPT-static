void async function Demo() {

  setInterval(async function() {
    const div_content = document.querySelectorAll('div.content');
    const div_content_length = div_content.length;
    for (let i = 0; i < div_content_length; i++) {
      try {

        let text = div_content[i].textContent;
        if (text.indexOf('WebGPT') > -1) {

          div_content[i].textContent = text.replaceAll('WebGPT', 'PatGPT');
          continue;
        }
        let ac = text.indexOf('Autocode.com');
        if (ac > -1) {
          let uni = 'the universe';
          if (ac == 0) { uni = 'The universe'; }
          div_content[i].textContent = text.replaceAll('Autocode.com', uni);

        }

        let textl = text.toLowerCase();
        if (textl.indexOf('webgpt') > -1) {
          div_content[i].textContent = textl.replaceAll('webgpt', '𝖯𝖺𝗍𝖦𝖯𝖳');
          div_content[i].style.textTransform = 'capitalize';
        }
      } catch (e) { continue; }
    }



  }, 100);


}?.();