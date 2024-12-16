type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ru',
        autoDisplay: false
      }, 'google_translate_element');
    }

    // Событие для изменения языка через селект
    document.getElementById('languageSelector').addEventListener('change', function () {
      var language = this.value;
      var googleCombo = document.querySelector('.goog-te-combo');
      if (googleCombo) {
        googleCombo.value = language;
        googleCombo.dispatchEvent(new Event('change'));
      }
    });