<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo e(url('css/style.css')); ?>">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
</head>
<body>
<header>
    <header >

        <div class="row">
            <div class="col">
                <h3><?php echo e($title ?? 'Jobfinder'); ?></h3>
            </div>
            <div class="col">
                <div class="d-flex justify-content-center gap-3">
                    <a class="text-dark text-decoration-none" href="">Home</a>
                    <a class="text-dark text-decoration-none" href="">About</a>
                    <a class="text-dark text-decoration-none" href="">Login</a>
                    <a class="text-dark text-decoration-none" href="">Register</a>
                </div>
            </div>
            <div class="col">
                <div class="d-flex justify-content-center gap-3">
                    <a type="button" class="btn btn-primary" text-decoration-none" href="">Post a Job</a>

                </div>
            </div>

        </div>
</header>
<?php echo $__env->yieldContent('content'); ?>
<footer>
    <div class="col-4 d-flex justify-content-center align-items-center">
        <span class="text-light">© 2021 Company, Inc</span>
    </div>
</footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>
<?php /**PATH C:\Laravel\workspace\job_findProject\resources\views/layouts/master.blade.php ENDPATH**/ ?>