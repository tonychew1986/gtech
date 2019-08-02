// Instructions
// 1. Loop and get files and folders within current directory
// 2. Search files for TODO text
// 3. If text exist then get path of file

package main

import (
    "fmt"
    "os"
    "path/filepath"
)

var extension = ".js"

func main() {
    var files [] string

    root := "./data"
    err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {

			if info.IsDir() {
				return nil
			}
			if filepath.Ext(path) == extension {

				// Get absolute path of file
				abs,err := filepath.Abs(path)
				if err == nil {
					 fmt.Println(abs)
				}
				files = append(files, abs)
			}
			return nil
    })

		if err != nil {
			fmt.Printf("walk error [%v]\n", err)
		}

		fmt.Println(files)

}
