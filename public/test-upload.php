<?php
// Simple test to check file upload
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "<h2>Upload Test Results:</h2>";
    echo "<pre>";
    print_r($_FILES);
    echo "</pre>";
    
    echo "<h3>PHP Settings:</h3>";
    echo "upload_max_filesize: " . ini_get('upload_max_filesize') . "<br>";
    echo "post_max_size: " . ini_get('post_max_size') . "<br>";
    echo "max_file_uploads: " . ini_get('max_file_uploads') . "<br>";
    
    if (isset($_FILES['test_file'])) {
        $file = $_FILES['test_file'];
        echo "<h3>File Details:</h3>";
        echo "Name: " . $file['name'] . "<br>";
        echo "Size: " . $file['size'] . " bytes<br>";
        echo "Type: " . $file['type'] . "<br>";
        echo "Error: " . $file['error'] . "<br>";
        
        if ($file['error'] === UPLOAD_ERR_OK) {
            echo "<p style='color: green;'>✅ File uploaded successfully!</p>";
        } else {
            echo "<p style='color: red;'>❌ Upload failed with error code: " . $file['error'] . "</p>";
        }
    }
} else {
?>
<!DOCTYPE html>
<html>
<head>
    <title>Upload Test</title>
</head>
<body>
    <h1>File Upload Test</h1>
    <form method="post" enctype="multipart/form-data">
        <p>
            <label>Select a file (try a video file):</label><br>
            <input type="file" name="test_file" accept="video/*,audio/*,image/*">
        </p>
        <p>
            <button type="submit">Test Upload</button>
        </p>
    </form>
</body>
</html>
<?php
}
?>
