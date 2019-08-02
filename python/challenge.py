# Instructions #
# 1. Loop and get files and folders within current directory
# 2. Search files for TODO text
# 3. If text exist then get path of file

import os


def checkFiles():
    currentPath = os.path.dirname(os.path.abspath(__file__))
    print("currentPath", currentPath)

    files = []

    for r, d, f in os.walk("data"):
        # print("-----")
        # print("root", r)
        # print("directory", d)
        # print("file", f)

        for file in f:
            if '.js' in file:
                filePath = r + "/" + file
                # print("filePath", filePath)

                txt = open(filePath).read()
                # print("txt", txt)

                if 'TODO' in txt:
                    fullPath = os.path.join(currentPath, filePath)
                    print(fullPath)

                    files.append(fullPath)

    # print("files", files)


if __name__ == '__main__':
    checkFiles()
