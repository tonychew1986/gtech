# Instructions #
# 1. Loop and get files and folders within current directory
# 2. Search files for TODO text
# 3. If text exist then get path of file

import os


class challenge(object):
    def __init__(self, data={}):
        self.files = []

    def checkFiles(self, path, extension, searchTerm):
        currentPath = os.path.dirname(os.path.abspath(__file__))
        print("currentPath", currentPath)

        for r, d, f in os.walk(path):
            # print("-----")
            # print("root", r)
            # print("directory", d)
            # print("file", f)

            for file in f:
                if extension in file:
                    filePath = r + "/" + file
                    # print("filePath", filePath)

                    txt = open(filePath).read()
                    # print("txt", txt)

                    if searchTerm in txt:
                        fullPath = os.path.join(currentPath, filePath)
                        print(fullPath)

                        self.files.append(fullPath)

        return self.files

    def clearFiles(self):
        self.files = []


if __name__ == '__main__':
    challenge = challenge()
    challenge.checkFiles("data", ".js", 'TODO')
    print("files", challenge.files)
