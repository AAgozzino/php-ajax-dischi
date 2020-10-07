<?php include 'db.php'; ?>

<div class="disk">
<?php foreach ($database as $disk) :?>
  <div class="disk-box">
    <img class="disk-box-cover" src="<?php echo $disk["poster"]; ?>" alt="Disk cover">
    <h2 class="disk-box-title"><?php echo $disk["title"]; ?></h2>
    <h3 class="disk-box-author"><?php echo $disk["author"]; ?></h3>
    <h3 class="disk-box-year"><?php echo $disk["year"]; ?></h3>
  </div>
<?php endforeach; ?>
</div>
