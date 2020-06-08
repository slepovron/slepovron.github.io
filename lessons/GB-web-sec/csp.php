<body>
  <h3>Whatever _malicious_ you inserted shouldn’t be executed!</h3>
  <?php
    echo $_GET[“js”];
  ?>
  <h3>But legitimate code still should execute</h3>
  <script src=”http://victim.com/some.js”></script>
</body>