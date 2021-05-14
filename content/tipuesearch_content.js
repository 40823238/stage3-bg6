var tipuesearch = {"pages": [{'title': 'About', 'text': '小組個人成員倉儲/ 小組個人成員網頁 \n 40823211 /40823211 \xa0陳昱愷 \n 40823214 / 40823214 \xa0 林厚宇 \n 40823216 /40823216 \xa0 陳弘勛 \n 40823218 /40823218 \xa0 陳致文 \n 40823225 /40823225 \xa0 徐誠隆\xa0 \n 40823238 /40823238 \xa0 吳容輝 \n 40823247 /40823247 \xa0 許力右test \n 40823248 /40823248 \xa0 劉彥廷 \n \n', 'tags': '', 'url': 'About.html'}, {'title': '機械手臂', 'text': '原本我們的主題，是在我們原本在stage2-bg6所做的腳踏車衝擊測試機跟機械手臂在做選擇，但考慮到 腳踏車衝擊測試機的零件數過多及他所會遇到的力學相關的問題，所以我們最後討論出來的結果是，將主題訂為機械手臂。 \n', 'tags': '', 'url': '機械手臂.html'}, {'title': '繪圖成果', 'text': '此為不含夾爪有六軸的機械手臂 \n \n', 'tags': '', 'url': '繪圖成果.html'}, {'title': '程式模擬', 'text': '', 'tags': '', 'url': '程式模擬.html'}, {'title': 'W10', 'text': '上網找的資料顯示coppeliasim上有一個編輯程式的選項 \n 參考資料: https://zhuanlan.zhihu.com/p/105960079 \n 4/27(二)因為繪圖部分還沒畫好，今天暫時用coppeliasim裡的機械手臂模型來模擬。 \n 設定的主體上連結每個零件，各零件之間有可以旋轉的軸，以及連結的命令區塊 \n 下圖為參考的機械手臂: \n \n 這是機械手臂的零件圖: \n \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '根據上網找的資料，發現COPPELIASIM的程式編譯語言為LUA，但仍可透過改變設定，來使用其他語言編譯。 \n \n 以下為參考資料: \n https://blog.csdn.net/qq_29696095/article/details/104406971 https://blog.csdn.net/qq_29696095/article/details/104474081 https://www.coppeliarobotics.com/helpFiles/en/inverseKinematicsTutorial.htm \n http://mde.tw/cd2021/downloads/V-REP%20Lecture.pdf http://hades.mech.northwestern.edu/index.php/CoppeliaSim_Introduction https://www.coppeliarobotics.com/helpFiles/index.html http://mde.tw/cd2021/content/V-rep.html \n', 'tags': '', 'url': 'W11.html'}, {'title': 'CoppliaSim模擬圖檔', 'text': '', 'tags': '', 'url': 'CoppliaSim模擬圖檔.html'}, {'title': '架設場景', 'text': '', 'tags': '', 'url': '架設場景.html'}, {'title': '0510對軸進行旋轉控制', 'text': '使用coppeliaSim\xa0先叫出一個簡單的軸 \n 來進行模擬控制 \n \n \n', 'tags': '', 'url': '0510對軸進行旋轉控制.html'}, {'title': '0513對方快進行XYZ軸控制', 'text': "\n 建立方塊並且對其進行XYZ軸控制 \n \n \n 程式碼如下 \n function sysCall_init()\n    joint01=sim.getObjectHandle('joint01')\n    joint02=sim.getObjectHandle('joint02')\n    joint03=sim.getObjectHandle('joint03')\n    set=0\n    set1=0\n    set2=0\nend\n\nfunction sysCall_actuation()\n    -- put your actuation code here\n    message,auxiliaryData=sim.getSimulatorMessage()\n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==2009) then\n                set=set+0.01\n                sim.setJointTargetPosition(joint01,set)\n            end\n            if (auxiliaryData[1]==2010) then\n                set=set-0.01\n                sim.setJointTargetPosition(joint01,set)\n            end\n            if (auxiliaryData[1]==2007) then\n               set1=set1+0.01\n               sim.setJointTargetPosition(joint02,set1)\n            end\n           if (auxiliaryData[1]==2008) then\n              set1=set1-0.01\n              sim.setJointTargetPosition(joint02,set1)\n            end\n            if (auxiliaryData[1]==50) then\n               set2=set2+0.01\n               sim.setJointTargetPosition(joint03,set2)\n            end\n           if (auxiliaryData[1]==56) then\n              set2=set2-0.01\n              sim.setJointTargetPosition(joint03,set2)\n            end\n        end\n    message,auxiliaryData=sim.getSimulatorMessage()\n    end\nend \n \n", 'tags': '', 'url': '0513對方快進行XYZ軸控制.html'}, {'title': '0513物件螺旋運動', 'text': "使用 線程腳本使方塊進行螺旋運動 \n \n code \n function sysCall_threadmain()\n    jointx=sim.getObjectHandle('01')\n    jointy=sim.getObjectHandle('02')\n    jointz=sim.getObjectHandle('03')\n    high=0\n    \n    for cycle=0,36000,1 do\n        sim.setJointTargetPosition(jointx,0.3*(math.sin(cycle*math.pi/180)))\n        sim.wait(0.01)\n        sim.setJointTargetPosition(jointy,0.3*(math.cos(cycle*math.pi/180)))\n        sim.wait(0.01)\n        high=high+0.001\n        sim.setJointTargetPosition(jointz,high)\n        sim.wait(0.01)\n        \n    end\nend \n", 'tags': '', 'url': '0513物件螺旋運動.html'}, {'title': '0510架設機械手臂場景', 'text': '將所有物件控制後直接進行模擬，檢測是否有異樣 \n \n', 'tags': '', 'url': '0510架設機械手臂場景.html'}, {'title': '機械手臂場景微調', 'text': '嘗試使用程式控制 \n 但是還是會亂跑 \n \n \n \n', 'tags': '', 'url': '機械手臂場景微調.html'}, {'title': '機械手臂場景路徑控制-1', 'text': '勉強可以控制路徑了(預先設定 \n \n', 'tags': '', 'url': '機械手臂場景路徑控制-1.html'}, {'title': '機械手臂場景路徑控制-2', 'text': '可以透過程式來進行路徑的預先規劃 \n \n \n', 'tags': '', 'url': '機械手臂場景路徑控制-2.html'}, {'title': '尋找控制代碼', 'text': "coppeliasim中 \n simGetSimulatorMessage()為讀取鍵盤狀態的指令 \n 但是我們不知道指令是甚麼，所以寫了一段程式來檢測看每一個按鍵的指令是什麼 \n 所以寫了這一支程式來檢測每一個按鈕的值 \n 在coppeliaSim中叫出一個物件，然後對那個物件編寫程式如下 \n 開始模擬後按下鍵盤鍵即可在下方視窗顯示對應的按鍵 \n \n 程式碼如下 \n function sysCall_actuation()\n    message,auxiliaryData=simGetSimulatorMessage()\n\twhile message~=-1 do\n\t\tif (message==sim_message_keypress) then\n\t\t\tprint(auxiliaryData[1])\n\t\t\tif (auxiliaryData[1]==string.byte(' ')) then\n\t\t\t\t-- space key was pressed\n\t\t\tend\n\t\tend\n\t\tmessage,auxiliaryData=simGetSimulatorMessage()\n\tend\nend \n \n", 'tags': '', 'url': '尋找控制代碼.html'}, {'title': '控制解說', 'text': '5/11 \n 方向鍵上,下，控制大臂的上下移動 \n 方向鍵左,右，控制底座的旋轉 \n 小鍵盤2,8 控制小臂上下移動 \n 小鍵盤4,6 控制小臂的旋轉 \n 小鍵盤1,3 控制手腕的轉動 \n 小鍵盤0 控制小臂是否與大臂連動 \n \n \n', 'tags': '', 'url': '控制解說.html'}, {'title': '0513 Lua 新增夾爪控制', 'text': '\n 新增一夾爪與兩個攝影機 \n 夾爪可以夾取物品，攝影機可以方便對正要夾取的物品 \n 圖檔: \n Camera contral.ttt \n 參考影片 \n \n \n', 'tags': '', 'url': '0513 Lua 新增夾爪控制.html'}, {'title': '0511 Programming in C++', 'text': '圖檔: \n programmingl in C++ Unclear.ttt \n 簡介: \n 目前還尚未寫出(5/11)，在編譯上還有問題，問題跟"remoteAPI in C++"中的問題一樣 \n 並且尚未能找到能改語言的方法 \n \n \n \n \n', 'tags': '', 'url': '0511 Programming in C++.html'}, {'title': 'CoppeliaSim 教學', 'text': '', 'tags': '', 'url': 'CoppeliaSim 教學.html'}, {'title': '軸的旋轉教學', 'text': "\n 程式碼 \n function sysCall_init()\n    -- do some initialization here\n    joint=sim.getObjectHandle('joint01')\nend\n\nfunction sysCall_actuation()\n    -- put your actuation code here\n    sim.setJointTargetPosition(joint,135*math.pi/180)\nend \n", 'tags': '', 'url': '軸的旋轉教學.html'}, {'title': '直線運動教學', 'text': "\n 程式指令 \n function sysCall_init()\n    -- do some initialization here\n    joint=sim.getObjectHandle('joint')\nend\n\nfunction sysCall_actuation()\n    -- put your actuation code here\n    sim.setJointTargetPosition(joint,50)\nend \n \n", 'tags': '', 'url': '直線運動教學.html'}, {'title': 'CODE 指令解說', 'text': '部分LUA指令講解 \n 1.sim.getObjectHandle \n 使用範例如下 \n XXX=sim.getObjectHandle(\'joint\') \n 講解 XXX為一個自行定義的名詞，此指令為定義XXX為一個連接軸，而(\'joint\')為該軸在場景裡面的名稱 \n \n 2.sim.setJointTargetPosition \n 使用範例如下 \n sim.setJointTargetPosition(XXX,90) \n 講解 XXX移動至90這個位置，或旋轉至90rad，XXX請參見第一個指令講解,角度預設為RAD \n 若要需求為旋轉至90deg，指令參考如下 \n sim.setJointTargetPosition(XXX,90*math.pi/180) \n \n 3.sim.getSimulatorMessage \n 使用範例如下 \n message,auxiliaryData=sim.getSimulatorMessage()\nwhile message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==2009) then\n               指定要做的事情\n            end\n         end\nmessage,auxiliaryData=sim.getSimulatorMessage()\nend\n \n \n 講解 \n 第一行 \n message,auxiliaryData=sim.getSimulatorMessage() \n message代表跟鍵盤對接的狀態 \n auxiliaryData代表讀取到鍵盤的值 \n 第二行的開始 \n 當(while)"message的值不等於-1時 \n 若(if) auxiliaryData讀取到的值為2009 \n 進行要做的事情，可以是上面第二項"sim.setJointTargetPosition"或其他指令 \n 可參考 尋找控制代碼 \n \n 4.simwat \n 使用範例 \n sim.wait(0.01) \n 只能在線程控制中使用(Threaded chil script) \n 為暫停指令，括弧內單位為秒 \n', 'tags': '', 'url': 'CODE 指令解說.html'}, {'title': '機械手臂設定範例', 'text': '\n', 'tags': '', 'url': '機械手臂設定範例.html'}, {'title': '舊資料', 'text': '', 'tags': '', 'url': '舊資料.html'}, {'title': '0511 Programming in Lua on multiple program', 'text': '圖檔下載 \n programming in Lua in multiple program.ttt \n 簡介: \n 最基本的控制 \n 在單一軸上對單一軸做程式控制 \n 優點: 程式簡單，變數少 \n 缺顛: 要修改程式不易，有幾個程式就需要修改幾次 \n \n \n \n \n \n', 'tags': '', 'url': '0511 Programming in Lua on multiple program.html'}, {'title': '0511 Programming in Lua in One program', 'text': '圖檔 \n programming in Lua in One program.ttt \n 簡介 \n 使用單一程式進行控制 \n 優點: 程式只有一個，所以可以在編寫上比較輕鬆 \n 缺點: 程式較長，尋找特定函式較不易，變數較多程式控制還多，命名上須留意 \n \n \n \n', 'tags': '', 'url': '0511 Programming in Lua in One program.html'}, {'title': 'remoteAPI', 'text': '', 'tags': '', 'url': 'remoteAPI.html'}, {'title': 'remoteAPI in C++', 'text': '', 'tags': '', 'url': 'remoteAPI in C++.html'}, {'title': '0511', 'text': '嘗試以C++最為remoteAPI控制的語言 \n compiler為code block in Win10 \n 不論怎麼修改在 \n 後還是出現問題 \n simxGetObjectHandle(clientID, "joint1", &joint01, simx_opmode_oneshot_wait); \n 上程式片段中 \n simx_opmode_oneshot_wait \n 此定義一直出現error，內容如下 \n error: \'simx_opmode_oneshot_wait\' was not declared in this scope \n 中譯:\xa0 simx_opmode_oneshot_wait 定義不明 \n 但是在尋找網路上的範例，寫法也都是如我程式中一樣，目前還在尋找解決方法 \n \n \n 附上程式 \n #include <Windows.h>\n#include <iostream>\n#include <stdio.h>\n#include <stdlib.h>\n#include <math.h>\n\n\nextern "C" {\n    #include "remoteAPI/extApi.h"\n}\n\n\n\nusing namespace std;\n\nint main(){\n    int clientID = 0;\n    simxFinish(-1);\n    clientID = simxStart((simxChar*)"127.0.0.1", 19997, true, true, 5000, 5);\n    Sleep(1);\n    if (clientID != -1)\n    {\n        int joint01;\n        int joint02;\n        int joint03;\n        int joint04;\n        int joint05;\n        simxGetObjectHandle(clientID, "joint1", &joint01, simx_opmode_oneshot_wait);//setting\n        simxGetObjectHandle(clientID, "joint2", &joint02, simx_opmode_oneshot_wait);\n        simxGetObjectHandle(clientID, "joint3", &joint03, simx_opmode_oneshot_wait);\n        simxGetObjectHandle(clientID, "joint4", &joint04, simx_opmode_oneshot_wait);\n        simxGetObjectHandle(clientID, "joint5", &joint05, simx_opmode_oneshot_wait);\n\n\n        float degset01=-11.9;\n        float degset02=34.69;\n        float degset03=-20.2;\n        float degset04=-11.9;\n        float degset05=-11.9;\n        float dif=1;\n\n        //angle set0\n        simxSetJointTargetPosition(clientID,joint01,degset01,simx_opmode_oneshot);\n        simxSetJointTargetPosition(clientID,joint02,degset02,simx_opmode_oneshot);\n        simxSetJointTargetPosition(clientID,joint03,degset03,simx_opmode_oneshot);\n        simxSetJointTargetPosition(clientID,joint04,degset04,simx_opmode_oneshot);\n        simxSetJointTargetPosition(clientID,joint05,degset05,simx_opmode_oneshot);\n        bool balance_contral=true;\n\n\n        clientID,auxiliaryData=simGetSimulatorMessage();\n\n\n        while (clientID!=-1) {\n            if (clientID==simxmessage_keypress) {\n                if (auxiliaryData[1]==2009) { //up Key\n                    degset01=degset01+dif;\n                    simxSetJointTargetPosition(clientID,joint01,degset01,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==2010) { //down key\n                    degset01=degset01-dif;\n                    simxSetJointTargetPosition(clientID,joint01,degset01,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==2007) { //left key\n                    degset02=degset02+dif;\n                    simxSetJointTargetPosition(clientID,joint02,degset02,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==2008) {  //right key\n                    degset02=degset02-dif;\n                    simxSetJointTargetPosition(clientID,joint02,degset02,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==56) { //num8 key\n                    degset03=degset03+dif;\n                    simxSetJointTargetPosition(clientID,joint03,degset03,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==50) { //num2 key\n                    degset03=degset03-dif;\n                    simxSetJointTargetPosition(clientID,joint03,degset03,simx_opmode_oneshot);\n\n                }\n                if (auxiliaryData[1]==54) { //num6 key\n                    degset04=degset04+dif;\n                    simxSetJointTargetPosition(clientID,joint04,degset04,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==52) { //num4 key\n                    degset04=degset04-dif;\n                    simxSetJointTargetPosition(clientID,joint04,degset04,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==49) { //mun1 key\n                    degset05=degset05+dif;\n                    simxSetJointTargetPosition(clientID,joint05,degset05,simx_opmode_oneshot);\n                }\n                if (auxiliaryData[1]==51) { //num3 key\n                    degset05=degset05-dif;\n                    simxSetJointTargetPosition(clientID,joint05,degset05,simx_opmode_oneshot);\n                }\n\n\n\n\n                if  (auxiliaryData[1]==48){ //setting auto Balance at num0 key\n                    if (balance_contral==true){\n                        balance_contral=false;\n                    }else{\n                        balance_contral=true;\n                    }\n                }\n                if (balance_contral==true) {\n                    if (auxiliaryData[1]==2007) {\n                        degset03=degset03+dif ;\n                        simxSetJointTargetPosition(clientID,joint03,degset03,simx_opmode_oneshot);\n                    }\n                    if (auxiliaryData[1]==2008) {\n                        degset03=degset03-dif;\n                        simxSetJointTargetPosition(clientID,joint03,degset03,simx_opmode_oneshot);\n                        }\n                    }\n                }\n        clientID,auxiliaryData=simGetSimulatorMessage();\n        }\n    }\n    simxFinish(clientID);\n    return clientID;\n}\n \n \n', 'tags': '', 'url': '0511.html'}, {'title': '0512', 'text': '後來上網尋找解答發現疑似是complier的問題 \n 於是切換為VS2019進行編譯 \n 並且新增path及include至專案檔 \n 在X64的環境下進行DeBug後 \n 第一個錯誤是這個 \n \n 並且出現以下錯誤 \n \n C4244為警示狀態外，其他錯誤經查詢發現似乎不能啟動"remotaApi.dll"的這個程式 \n \n \n', 'tags': '', 'url': '0512.html'}, {'title': '0512-2', 'text': '後來經過修改與PATH路徑修正 \n 並且將remotaApi所需的標頭檔 \n #include <exApi.h> \n 將其修改程式變成 \n extern "C" {\n   \xa0#include "exApi.h" \n} \n 但是似乎還是一樣 \n \n 目前正在尋找其他解法來修復 \n \n \n', 'tags': '', 'url': '0512-2.html'}, {'title': 'remoteAPI in python', 'text': '', 'tags': '', 'url': 'remoteAPI in python.html'}, {'title': '0513-1', 'text': '嘗試用remoteAPI鍵盤控制機械手臂，不過手臂上段模擬時出現甩動問題，因此只展示下半部分。 \n \n \n 程式碼 \n # File created by Thibaut Royer, Epitech school\n# thibaut1.royer@epitech.eu\n# It intends to be an example program for the "Two wheels, one arm" educative project.\n\nimport sim as vrep\nimport math\nimport random\nimport time\nimport keyboard\n\nprint (\'Start\')\n\n# Close eventual old connections\nvrep.simxFinish(-1)\n# Connect to V-REP remote server\nclientID = vrep.simxStart(\'192.168.0.4\', 19997, True, True, 5000, 5)\n\nif clientID != -1:\n    print (\'Connected to remote API server\')\n    \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "40823218",\n        vrep.simx_opmode_oneshot)\n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n\n    # Communication operating mode with the remote API : wait for its answer before continuing (blocking mode)\n    # http://www.coppeliarobotics.com/helpFiles/en/remoteApiConstants.htm\n    opmode = vrep.simx_opmode_oneshot_wait\n    STREAMING = vrep.simx_opmode_streaming\n\n    # Try to retrieve motors and robot handlers\n    # http://www.coppeliarobotics.com/helpFiles/en/remoteApiFunctionsPython.htm#simxGetObjectHandle\n    vrep.simxStartSimulation(clientID, opmode)\n    ret,base_handle=vrep.simxGetObjectHandle(clientID,"joint1_",opmode)\n    ret,bottom_handle=vrep.simxGetObjectHandle(clientID,"joint2_",opmode)\n    ret,top_handle=vrep.simxGetObjectHandle(clientID,"joint3_",opmode)\n    ret,rotate_handle=vrep.simxGetObjectHandle(clientID,"joint4_",opmode)\n    ret,wrist_handle=vrep.simxGetObjectHandle(clientID,"joint5_",opmode)\n    while True:\n        #Clockwise\n        if keyboard.is_pressed("a"):\n         vrep.simxSetJointTargetVelocity(clientID,base_handle,0.1,opmode)\n        #anti-Clockwise \n        if keyboard.is_pressed("f"):\n         vrep.simxSetJointTargetVelocity(clientID,base_handle,-0.1,opmode)\n        #bottom_handle up\n        if keyboard.is_pressed ("w"):\n         vrep.simxSetJointTargetVelocity(clientID,bottom_handle,0.1,opmode)\n        #bottom_handle down\n        if keyboard.is_pressed ("s"):\n         vrep.simxSetJointTargetVelocity(clientID,bottom_handle,-0.1,opmode)\n         #top_handle up\n        if keyboard.is_pressed ("e"):\n         vrep.simxSetJointTargetVelocity(clientID,top_handle,0.1,opmode)\n         #top_handle down\n        if keyboard.is_pressed ("d"):\n         vrep.simxSetJointTargetVelocity(clientID,top_handle,-0.1,opmode)\n         #rotate\n        if keyboard.is_pressed ("r"):\n         vrep.simxSetJointTargetVelocity(clientID,rotate_handle,0.1,opmode)\n         #wrist_handle left\n        if keyboard.is_pressed ("j"):\n         vrep.simxSetJointTargetVelocity(clientID,wrist_handle,0.1,opmode)\n         #wrist_handle right\n        if keyboard.is_pressed ("k"):\n         vrep.simxSetJointTargetVelocity(clientID,wrist_handle,-0.1,opmode)\n         #stop\n        if keyboard.is_pressed ("space"):\n         vrep.simxSetJointTargetVelocity(clientID,base_handle,0,opmode)\n         vrep.simxSetJointTargetVelocity(clientID,bottom_handle,0,opmode)\n         vrep.simxSetJointTargetVelocity(clientID,top_handle,0,opmode)\n         vrep.simxSetJointTargetVelocity(clientID,rotate_handle,0,opmode)\n         vrep.simxSetJointTargetVelocity(clientID,wrist_handle,0,opmode)\n\n\nelse:\n    print (\'Failed connecting to remote API server\')\n    print (\'End\')\n \n \n', 'tags': '', 'url': '0513-1.html'}, {'title': 'remoteApi in Lua', 'text': '', 'tags': '', 'url': 'remoteApi in Lua.html'}, {'title': '0513-2', 'text': '.. \n', 'tags': '', 'url': '0513-2.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}, {'title': '每周進度影片', 'text': '', 'tags': '', 'url': '每周進度影片.html'}, {'title': '第九周', 'text': '\n', 'tags': '', 'url': '第九周.html'}, {'title': '第十周', 'text': '\n', 'tags': '', 'url': '第十周.html'}, {'title': 'task', 'text': '', 'tags': '', 'url': 'task.html'}, {'title': 'task1', 'text': 'stage3-bg1 repo  |  stage3-bg1 site  |  40823245 repo  |  40823245 site  |  40823251 repo  |  40823251 site  |  40823208 repo  |  40823208 site  |  40823213 repo  |  40823213 site  |  40823232 repo  |  40823232 site  |  40823234 repo  |  40823234 site  |  40823235 repo  |  40823235 site  |  40823246 repo |  40823246 site ---------- stage3-bg2 repo  |  stage3-bg2 site  |  40823217 repo  |  40823217 site  |  40823201 repo  |  40823201 site  |  40823209 repo  |  40823209 site  |  40823210 repo  |  40823210 site  |  40823206 repo  |  40823206 site  |  40823207 repo  |  40823207 site  |  40823223 repo  |  40823223 site  |  40823224 repo |  40823224 site ---------- stage3-bg3 repo  |  stage3-bg3 site  |  40823236 repo  |  40823236 site  |  40823202 repo  |  40823202 site  |  40823203 repo  |  40823203 site  |  40823212 repo  |  40823212 site  |  40823219 repo  |  40823219 site  |  40823222 repo  |  40823222 site  |  40823231-2 repo  |  40823231-2 site  |  40823244 repo |  40823244 site ---------- stage3-bg4 repo  |  stage3-bg4 site  |  40823239 repo  |  40823239 site  |  s40723140 repo  |  s40723140 site  |  s40723128 repo  |  s40723128 site  |  s40723139 repo  |  s40723139 site  |  s40723106 repo  |  s40723106 site  |  s40723135 repo  |  s40723135 site  |  s40723143 repo  |  s40723143 site  |  s40723215 repo |  s40723215 site ---------- stage3-bg5 repo  |  stage3-bg5 site  |  40823221 repo  |  40823221 site  |  40823204 repo  |  40823204 site  |  40823205 repo  |  40823205 site  |  40823220 repo  |  40823220 site  |  40823228 repo  |  40823228 site  |  40823237 repo  |  40823237 site  |  40823242 repo  |  40823242 site  |  40823250 repo |  40823250 site  |  40832244 repo |  40832244 site ---------- stage3-bg6 repo  |  stage3-bg6 site  |  40823225 repo  |  40823225 site  |  40823214 repo  |  40823214 site  |  40823218 repo  |  40823218 site  |  40823211 repo  |  40823211 site  |  40823248 repo  |  40823248 site  |  40823247 repo  |  40823247 site  |  40823216 repo  |  40823216 site  |  40823238 repo |  40823238 site ---------- stage3-bg7 repo  |  stage3-bg7 site  |  40623144 repo  |  40623144 site  |  40823233 repo  |  40823233 site  |  s40723224 repo  |  s40723224 site  |  40823241 repo  |  40823241 site  |  40423155 repo  |  40423155 site  |  40823227 repo  |  40823227 site  |  s40723233 repo  |  s40723233 site ---------- \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '無 \n', 'tags': '', 'url': 'task2.html'}, {'title': 'task3', 'text': '無 \n', 'tags': '', 'url': 'task3.html'}, {'title': '討論', 'text': '本小組的討論時間在組員的協調下，最終定為每個禮拜一的晚上11.。 \n', 'tags': '', 'url': '討論.html'}, {'title': 'discord', 'text': '', 'tags': '', 'url': 'discord.html'}, {'title': '第一次討論', 'text': '4/27 \n \n \n', 'tags': '', 'url': '第一次討論.html'}, {'title': '第二次討論', 'text': '\n \n \n \n', 'tags': '', 'url': '第二次討論.html'}, {'title': '第三次討論', 'text': '\n \n \n', 'tags': '', 'url': '第三次討論.html'}, {'title': '遇到的問題', 'text': '', 'tags': '', 'url': '遇到的問題.html'}, {'title': '更新出錯', 'text': '\n \n 參考網站: https://blog.csdn.net/yxlshk/article/details/79944535 \n 說明:由於兩位組員通時進行推動的動作，所以出現了有位組員pull時檔案衝突 ， 我們討論後決定將他的版本退回到上個版本，結果證實此方法可以有效解決這個問題。 \n', 'tags': '', 'url': '更新出錯.html'}]};