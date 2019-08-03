
package main

import (
  "testing"
)

func TestCheckfiles(t *testing.T) {
    result := checkfiles("data", ".js", "TODO")

    if (len(result) != 6) {
        t.Error("fail", result)
    }

    result2 := checkfiles("data", ".js", "123")

    if (len(result2) != 0) {
        t.Error("fail", result2)
    }

    result3 := checkfiles("data", ".go", "TODO")

    if (len(result3) != 0) {
        t.Error("fail", result3)
    }
}
