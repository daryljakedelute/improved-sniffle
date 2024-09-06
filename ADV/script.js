<button onclick="setMode('light-mode')">Light Mode</button>
<button onclick="setMode('dark-mode')">Dark Mode</button>
<button onclick="setMode('custom-scheme')">Custom Scheme</button>

<script>
    function setMode(mode) {
        document.body.className = mode;
    }
</script>
    