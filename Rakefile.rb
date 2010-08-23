task :default => [:run_tests]

task :run_tests do
  puts "Running tests"

  puts %x{java -jar tools\\JSTestDriver\\JsTestDriver-1.2.1.jar --port 4224 --browser "C:\\Program Files\\Mozilla Firefox\\firefox.exe" --config jsTestDriver.conf --tests all}
  #puts %x{java -jar "tools/JSTestDriver/JsTestDriver-1.2.1.jar" --port 4224 --browser "/usr/bin/firefox" --config jsTestDriver.conf --tests all}

  raise "Tests failed" unless $?.success?
end