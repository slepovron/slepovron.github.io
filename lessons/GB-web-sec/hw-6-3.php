<body>
<h3>Whatever _malicious_ you inserted shouldn’t be executed!</h3>
<?php
  echo $_GET[“name”];
?>
<h3>But legitimate code still should execute</h3>
<script src=”http://victim.com/some.js”></script>
<script src=”http://sub.victim.com/some.js”></script>
</body>