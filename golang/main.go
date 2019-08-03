// Instructions
// 1. Loop and get files and folders within current directory
// 2. Search files for TODO text
// 3. If text exist then get path of file

package main

import (
    "fmt"
    "os"
    "path/filepath"
    "io/ioutil"
    "strings"
)


func main() {
    result := checkfiles("./data", ".js", "TODO")

    fmt.Println(result)
}

func checkfiles(root string, extension string, searchTerm string) []string {
    var files [] string

    err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {

      if info.IsDir() {
        return nil
      }
      if filepath.Ext(path) == extension {

        // Read file if extension match
        b, err := ioutil.ReadFile(path)
        if err != nil {
            panic(err)
        }
        s := string(b)

        // Only display if file contains searchTerm
        if(strings.Contains(s, searchTerm)) {
          // Get absolute path of file
          abs,err := filepath.Abs(path)
          if err == nil {
             fmt.Println(abs)
          }
          files = append(files, abs)
        }
      }
      return nil
    })

    if err != nil {
      fmt.Printf("walk error [%v]\n", err)
    }

    fmt.Println(files)

    return files
}
