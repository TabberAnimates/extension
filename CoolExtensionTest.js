const blockIconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAADpCAYAAADBNxDjAAAAAXNSR0IArs4c6QAAIABJREFUeF7tXQeYU8X2/81NNsnuJtm+C7ssVdQn+rDLUxFQnyD6t4CKFSxgAxUsIFIsdEFAEUQQCwiC2LCjICq2Z3k+FFGQIiws21t2N5s6/+/cbHCBLSk3yU0y8335nry9d8pvzu+eMzNnzmEQRfUIcL6lCyxb7oG7uCfs2/4Jd1Ea3HUS0MDAGcCdAHN5xkH/ZhyABHANwOjf9Ac9h5TtgDa9Ctpjt0KT8wuMvZ9nrMsfqgcgzjsoT58o6kGAW3/sh/p3Z8K9twccO5PhriLmAZyI1/QnM9KPjnunmv638ScTmH4GQNPdDk2HvTAOeJoZLlzoR8Xi0RAjIEgaYoCbq57XfTAclhfmwvmnCdzRzCP+kE/pARwpEhxg6UDiPw8i8bIZLOnSBUq3KOprHQFB0hBLCLe8PA+WZ++Fq1wCNE1ak0LcstLVe7W4t14GaJLdSLptDUu953qlWxP1/Y2AIGkIpIFbvz8PlhdfRf37+dDocTg5Q9BgRKuktbAdMAzcj8z7zmfshD8j2p0YbFyQVIFJ5Q1bBqByxPtwFGs860Ra52ljnJxHAufC36Y7GQ3ZdqQu6cWST/5ZAYjjugpB0gCnn/Mfk2BNPhlVt22Gq0ACDI0bMgFWGHOv0ceqFki+YReMt96IhIRtjHWviblhhmFAgqR+gCwfhVR/tgSWpy+E2964SZrkOe4QpXkEuN1jDsunQjrAPPojmC+/Xxz9+C4wgqRtYMU5l1A1dx1qF18Kdw3AdABL9B1h8eThCHArQMSVjIDx5s1IveFqxroWC5haRkCQtAVseO2mk6GpvxQV06bAuccjVB6vAFEUQYAD7jpA6gCkPzINUuZGlnjuJkWqjrFKhNQdMaHyzmzNUx/AutEIpmkkZ9OjkxiTgIgPxwW46wHeABj6NSD1/sHMcO6HEe+WijogSNo4Gbxq7R3g20aibu1JHrOWNoJECSsC3AZ5A844eCcS//UkS/y/pWFtX6WNxTVJuWXDCdAU3oTaD+5D/ceJskkrrzfFRlDk5NUN0LqVStJFtTD0XQZm/pwlX/lO5PoU2ZbjlqS8av4qWBZdB3clwJIaNWck3fEiKwiqbJ1MYPpJSYDpjs9Y6vgLVNnPEHcq7kjKa+a/CMf+/qhfnwvUASCnA1HUjQB5NWmA5MH7IGX9yFLvH6zu/irbu7ghKee7c1D5wrewPN9FNmnlNacwa5UVp1DWRjeBGjeYTMP3Ie3G8xk7aVcoW1RL3TFPUm5dMwLWX0bBsedE2L6VwBLUgr3oR6AIkAmsP4sjods2lj7zxECriZb3YpqkvGz0H7B/cxyc+wEkeBwRxFlntMhm6/2Ud4IbgKSrayAZ/mLpc3rGxsCOHkVMkpRbvj4R9pUbUbcu22PWinPOWBVgz06wGzBcXg7z9UNj8Yw1pkjK+ZftUb5qMxy7u8GxHWB0TUyUuECANGvCMYD2hJ0sa0H3WBpzbJG06BIb7Ft18oaQWHvGkpz6NhY5ygUDjNdtY+nTevj2kvqfigmS8qqlS9Hw0TA4fqWFp/pRFz0MMQISoP+HE7p+77LUe6P+uCaqJZrXbPw/1C9eDeeOJLgtkH1tBUlDTIBoqJ6cUlwASwY0x1uRMmwYS7p0bTT0vLk+Ri1JedXsN1H3+iC4KxqJKc48o1UIQ9dvcjF0APpzrSxnJV38jcoSlSTlFWO/Rd2bvTxaU5AzKiUvbJ0mraoFpETA0P9HljHjjLA1rVBDUUdSblk1D9VzR4NXiqMVhYQgPqqhAOImIOXuNcx0x7XRNOaoISnnvxlRNmc7rF/metaeoggEAkHASfdWy1jWsqxA3o7EO1FBUl7z9DJUzr5Vvg0hikAgWAS4C0jIdcM4/npmGrgm2OpC/b7qScrrVj+OyqmT5StLYv0ZanmIo/rdnksWaRMmseTrpqp54KomKa+auh41z1/kce1TdVfVPMeiby0iQDdrGoDkO9ezjAkD1AqUaiWf17y4DFUP3wqWqlbsRL9iBQFeBaTNfJaZbr1HjUNSJUl52c1FqPs4B1KKn5nD1Aix6JP6EWCAqxRInzOPmW+9X239VR1JefFVFti+M8ohTUQRCIQNAQa4qwHDmVUs5920sDXrQ0OqIimvW/ksykaPhKQqjHyAUTwSMwhQzKv0eU8w042PqmVMqiEp3392A1y79JBoDSoCgqlFQOKvH40aVdvFyvK+VYU5pwqScsuKBagYOwqSKf5kQoxYnQjQhY3UWVNZytBJke5gxEnKSwZXwPplGqR0oUEjLQ2i/SYIkEYtAdKfmc5MN02IJDQRJSkvuW0XrJ90lZ2fRREIqA4BImoFkDhwB8t+5bhIdS9iJOXVSxai6rG7PYmQRBEIqBgBSiyV8dhTzDjiwUj0MiIk5ZXT16JmwVViDRqJKRdtBoQArwFMd7/N0iYPCuj9IF4KO0l53cpHUD5xmohBFMSsiVcjgwDlVU2bcR8zXfdMODsQVpLy6jnPwrJ8pCcMY1ibDiemoq2YRYB7QrLkvdiZsVP3hmuYYWOKnDF7/zGU1ENc1g7X7Ip2QoCAG9D1sLKcdWE7Qw0fSUuG74RtczfhqBACuRFVhhkBJ5B4wT6WubRTOBoOC0m55aVnUDXjHg9Bw9JkOLATbcQtAiTHEt1FfYoZh4Z8xzfkjOFl4zbBtr6vnHJdFIFALCEgJQOGC75lGXPODuWwQkpSXjX7RVheuAVwinVoKGdR1B0hBBrzphpHvMLSHro5VJ0IGUm59aNzUfH4ZrhLBUFDNXui3sgjwJ2A7iQ7a7cuZImHQkfSkqEVaNicJs5DIy9HogehRICOZTRA0uVbWPqsk0PRUkhIymufn4OqxQ+AW0TwsFDMmqhTZQhQSgsTYB71IjMPv03pzoWGpCU32tHwVYInaa8oAoE4QIC8kfS9bSxnBUXNU7QoTlJePLAOth1JYCL9g6IzJSpTPwKcHB2OtSFncifGehUr1WFFScrL7/8WtWt7iatnSk2PqCfqECCX16RrtrLMp05Squ+KkZTzPakoHlUB+29MmLlKTY+oJ+oQILNX1wPImX4SYz23KtF/5UhaNmYP6t/s7AlkLYpAII4R4PWA8ZZtLH2KItnGFSEpr5ywATXLLoBkjuOZEUMXCDQiwG2A/iwg++EejJ26LVhcgiYp5+uzUTi5GK6yxkzbwXZJvC8QiAEEiKiaHI6UR09lxkv+F8yIgidp5ZNvw/LUFWAUbV4UgYBA4BACvBow37+RpY67MBhUgidpydAGNHyuF2vRYKZBvBuTCFAyKEPfBpa9PKhIe0GRlFc89husL50AndgsikkhE4MKDgG6V2JvAMw3f87SHu8XaGUBk5TXvzQatgfmFWxPxe+77NAK34VA50C8F4MION3AsZ0T0Pk4PVBbBGTMH8VMNy8MZKgBk/TAbw9u/s/PL5372qsNWPtxXSBti3cEAjGNQP/eSVj0THt07eoA2E3bmXna8YEMOCCSLl/+yJufrVsy6OU3y0DeuYl6ERQlEPDFO7GLABGr2gZccX4SBl1nRt9/mpB/5op2gbgL+k3S999++8ZLr7xyhRZAsiBn7EqZGFnQCBC5rDbADmBwf2D+CysH5+ff8Ja/FftN0qFDhxavXrk820AsFUUgIBBoEwGvVh18xSXWN9/5wO8og36R9LohQ3a+tmZNtxShQducGPGAQKApAoeIennfujfXfe5XbhWfSTrk6sFb16x9s4cgqBA+gUBgCHiJ+tWGDeefe+GFm3ytxSeS/vjjj5mnn356qSCor7CK5wQCzSNgdwEXDhhoe//9D312LvCJpFu2bMnu2bNnsTlkoZbElAoE4gMBrzbdvPn7y3r3PvM9X0btE0l3796d07Vr1yJBUl8gFc8IBFpHoMYGfPXe/9nP/b/3fFJ7PpHUa+4KkgrxEwgEj4BM0teTcc7Vv7ZjrGubYVZ8IunPP288+5RTLvhakDT4CRI1xDcCXnP389Up6DPk3cGM9Wnz3NQ3kn5y2q5TLvqpqyBpfAuYGH3wCNTZgWemZGPoDSYY9dlgud+2ycE2H+D1C8b+tOGxWadfVg6xuxv8JIka4hsBMnU/W90B/S40ArUVQKdiDWPM3RoqbZN0/7EuO7j0zrpaDBl5UBA1vmVMjD5ABIhoNjvQwIGPXsnDgIFGwGoBst66jSX2ejE4ku7L5ZCMcGmBtWtrcN09RRBmb4AzJV6LWwQsdmDhE9kYdLUZaQkMOj0DOKWoMIB1+LVVZdnqH3nN4pmomjlODtHJAFcCw2urqnDTmGJB1LgVNzHwQBAgM/fV+e1ww82pQK3772tjFL0h9ZElzHznHS3V2zpJC7q60PQ6NwPcBgmvvFSJ28YWwySySAQyX+KdOEOAtOiCx7Jw58h0aKyUgPiIwu2cdfyrxbAJrZN0Xz4HOzo8C0+WsHRxBe55tBSmNo5jnU4ua/Vgi0YDSFKbS+hgm1H8fbcbcLkUAKCxZwkJkceAxuNyK5OznTFAq43cmNyNYwlm4mkMNC9HyrnFBky+Jw3jJmRBU8dBzzVbuBWsY0GLILT4B873HI+C835vjqSHGmoLW6OEU87chR27HdBqAoeBTIVFU7Jw1z0ZHlMhWkqShDWrqnDtqODX8UT247vr8MNXXYH6CGJgkjB3dhnGzyqHXuK0Cgq40EZK77MM+PTTLkA1JeQNczFLeHRCCZ5YUBHw8s3hAP55gh5ffNYZeicHmpuatr7RlJoi6/PeLLHbV80h0DJJD5xVC3dFclDfSyLpWcqQdOETWbg7Ckm6elVV0JttRNCsDA12/95dHR+pVA0enVCEJ56pDFi4SRgPkfSTCJJ0YnAk9Y7jtH/q8fGHnWEiddoWKY+2dwEp08Xyvm32lnazJOV8W3sUXFwI5pNrYcufP0FSKEFSmvQTT9Dj6086Aza/JUB59WTWYNKEIkx9VpDUC269DTj/7ESsX98ZqArEKrABHd5tNn9M8yQtPKcSrpLUoLQo9V6QNGiS0oc51Sxh3+7jImMSNkdxQdKjUGmwARf1TcJ773YKcJ44RbyvZblfmY6svHmSFnSnbYFglhuedgRJFSFpiklCwbbugF0FWpTmNYZIOnF8MaYtCs4iIEiCJykA7gbruPMo3rVA0m5E6+DNJEFSQdJWpCjia9JkCUuWVuLROWWwVLugCUItKUJSuMDyd7VNUs5352D/v4sESYP/RiFJEiRVM0nJMGmfgIn3FQatTZUiKTqs78jYMQVNYTuKtbx01OdoWN8n6PWoMHchSNr6hy7impS6l6LBg2MOYu6yqjbP/FsbjTIk5UDSJVtYxvyTWyfp3i4cUoICakSsSQVJBUn9J5ITLH/3YcrzsH/wuhWXoGLK+/5X3MIbYk0qzF01m7uq06QesFj+jlZIeqBXNdwVyqXrFiQVJBUk9VvntU7S/ce7wN3K5UcTJBUkbYOk/c5JxEdfdAUOUFIjv+U5+BdUtSZtHE7m6gtZ4qkbvYM73Nzd34ODO4IfuLcGQVJB0lakyeUC2udo8eiELNx4dQrQEAGfZDWSNOmCv1jGc10ESZX7FLVckziCaRPlWhvQ70wDNmzsEqA7XZtNtP6AGkkqJYDl/XZIgR76D25dfx7KRn8BBOJ3KDaOmkVAkLRNBtHRxYB+SVi3LlB3ujabiD6SkrNf2uIRLLnfC/JGkncEvHjIXtj/1zEAF/6WQRDmbmyau6R9RhfiqRerg455JUjaHH0YoD+9nGWvzDycpIVnuOCqkhRdvQuSxiZJtQzbCxwY90gxPvysDolBHKtHnKSpGtx9+wE891pNUB8cZZwZDqlMQEoDy/teVqJ/a9KCkzlQ1/T/CtKOEM4MMevMQO50WVqMvfcg5iytDNpTJ6LmrpZhZ6ETDzx0EB99Xh/wB0dxkrJksA7/O4Kk+0/m4IKkwX+ZmtQQq2tSGmKKBvffdxDzXwrenS6iJKWxZGoxasR+PPdqDYwBXqEWJLVROMT4jMxA90lVd1Ut1kiaosFddxzAktdUT9KeHLxemLtKqlKhSdtEM+Jr0sYPjvpImgTWYcvf5i7nv3bDget3gtvaBNWvB8TGUWxuHAlNehQNlDV3SVfqgbzVpzDWw7Mw5dVTX0XNqzc0H+rML1oe/rAgqSBpG+IjNGlLAGkA49ANLG38vz0kLbu1CNavcxQ9I6WKBUkFSQVJA9RyDEjsU8gyl+R5SFrYxw1XIVP0jFSQNHYvfQtzN/TmLoWI1OS7WO5nntDh/MAZHO4qZTeNBEkFSX3QIcLcbQkkDkipYHk/MMb5b0YU3mSB2yJI6oNQ+fWI2N1tEy5B0tZIagLL+y9j3PL6EFRPXQ0Kda/0hT6xJhVrUrEmbfND1fwDlBYxEcicPIrximefRf1zI8Htqibp4qlZuIPSTNRE4M5hgDDHrFugWJOGZ01KxzApt69kvOyuPbBu6qz48YuCa9JaOzDxnnTcPyYDKTrKvxgoa8L8njB32wRcmLutQSQB+gv/YLxkcANsvwbosdjGHChk7tLuVrUNWDI9GyPuSldH0qI2xQ9i48gHjARJ2wBJ17OO8aKBDjj+1Cq+HlVQk1JVlP7w5Tk5GHZrGlAXJapUaNI2aSpI2hpEHEg4zsl44b9dcFGW4RBEgTJKOL7nTuw74ERCs0nd2pzDQw8IkqooFwxdVcvWYtw9B/Hk0uDyqAiStkFSbRc34wcvcMG5VwKUCxJ4qFkDwwOPFOOV16pht7eS6dgHrhJJVy9ohyHD0gLMWuVDI0o/YtbgnTVVuPL2gwHn8VTlLRgtw7a/7Hh4Qgk+/jzKL303boKpy8HeK4huQNORM4+30QEWEpLSFzc3AZ3a/46ySndQ2b6tTuCWa1Iw4aFMdGyvBSirspqLnqG8woXJ00qxdFU1EgO0JFRJ0lgKn6J2kmo7cMYPnuuGsyg0JCUAdAyPzSzFwqWVsDkCT9/u3Tx6e3F7XHF9qieyXAgsdEV4r2eoqnLjwUnFWLYmuLAcqiSpQqkPCWth7rYmcW5A24406bluuEJIUnn9okHXzjtQWuGCFASxGpzAkMvNePzhTHTJJ22qCKWUrUQDHCx1YeK0Urz4enAEpY4Jkio7Pc3WprpL303MXW1OGEhK7ekZupy0E2WVwZHUq003rMzDBUNSgPomJq/FpY7z0yQJW36ox8kD9gUV2Mo7TbFOUoq72/cMAzZ+FqG4u2o3dzXh0KQKkpSqsruAQQOM6NJNd2hdancCT07MAlI1h9+2q1YwhrAvH/QEhjqLGyMeLMLbH1igUyAPs7vxtMmy/7iYy/TtdAEd87SYMSUHVwwwArYI7TOoXpMe6O2G+2Do1qSNJE3ruB0OF6AJchOZtGmd7WhLd/g1ZhiN0iGS6hKAWXPbA5VhIqrEUFLmxF3jivHWx7WKaFGCTqtlmD81Gzddk6IOS4E6pdCalPKT9jvbgI++6AYURigXjNo1aUIubRz1ccMZot1dr/bRAG9/WIvbxxyEzRbcUUxzCo2IS2ZTUxcHUmKjbknBvEW54Vm7ahkKf2tA3um7FSMojdVqA+xVxwMWFTlwKEjS3mcZ8OknXSJ7rKZmTaqRd3dDeE7alFFmDfK6bIel1g2Koh/qQms5hwMYfJkxPBqIAbW1bny6uR7aIK0FLzaE06uLcnHpRUbFg2YEhb8g6VHwKR7jSG6Bdnc7uUPrcdR0KFqGpA7b5bPScJDUuzNqpcs9YSrEzUS9cnwiBw5ecjxgU5EWVdjcFZq0NeGk6Ayyx9HFDjh3hsZ3t2n7DPj+5wZcfG0BnGp3RAgTqVtrhjaMPlzVAb17JamgN0d0QWjSMGlSDuiOdTBeclM1bP9RLrt3ayKlZzBkb4c+NHdu1CfMQfSISGrZfWwQNYTo1Ua/3amPFGHS3IqA3R2pd7RxFHFNSuNpp8V9ww9gwfLqgFNmhMbcpcRNZ5cyXjZqK6wbeyia8rAV+di+04azLt4rH9KL0jwCtHtNe9INu7pDT/dn1VSMEpYuqcD4meWw1QV37q0Kkpo0eHJWKWYurICjwR2ws01oSKoBEvtvZbzimSdRv+QhT2DsMAgEA1KP2SFI2gLxGuzA9x91Qlq6hPx2CWFbv/v8HTBLmD6lFBPmlAelRVWjSSmnzb0HMe/lqqDGozxJKXwKRWa44zXG69Zcgcppb4ckxlEzM+9ycRi7/invruh0PotG3DxIm0Xlv3ZDepYGcKhw2GYJM6eVYvyTMULSDC3GjS7E7CXBJ566qG8S3ntXqWTI3hhHkx5inHMtCk9zhCRaYAsyVl3rRk21G9167ZZ3Q0XxIEAE/W1jZ/zjeB2YyjZ0D82RwiQ9r5cBn2zoClRHwBHbJGHmlDI8Nr8cOhb45Q/CJiSaVDKD5f3kOQzhhWdxuCrCY+5Sg9QqA/btc6Dbv/YgSRBVJuivn3bCiSca1H0NT0GSkihIEllUYVhmtaAJ6CydThuCPRYMCUk1aWC533tJ2rfxTmkYwZKA0hInOp+1R07c6ojzYxmri+H3TZ3Q7Rh9XJE0VqyokJBUm+dg7T/3fMJ46a0H0PB1rnLH8H5An8Cw4w8bjuv7F0y68Dk6+NHDkD96SIueZAAcKt/2VliThhzcMDVAJP13nyS8/55Sa1I5F8w+lrmkk4ekNdMWo/rVO8J1DHMYbpQO/U8bel1RAAPjqKz2uA3SL5i7p2Gam6CbcZHnl0HCN+s64oQT9IKkQSMa/groONHpBK641IhVK/KBGiUudWgA07D1LPXhAR6Shio/qa94US9MEn75zoqBww7AZADqat1yyBW6NUPrllgsNLl6owZfrO2AE0iLRuqqlj/gCk16GFqe836GS/on47XXOwKlTmVOMuXjl7d6MFP3bYcWoXz/yRy8LnybR80JBpHRIMnxate/UY2Rj5bCYXGiuMxzyKzRxBZhycz9+q18nN03CahTuZnrnS9B0sMk124HevbQ47v/dgOKFCIonU+yZLAOnvzB6iKpd/gkrwkMyNRg7ZIKPLGgEsZEoGCfAyXlbugTop+sNgeQ006LtUtyceaZidGhRWl+BEkPkZS0qEZiuHSAESteylMwaHs0kLQpWfUMMDDAqMGCKSVY9X4t/tppQ1mV+6ggpPoo2Xgir6K8Dgl464VcnHxGYvQE+xYkPUyLUmSJ449JwE+/dgcOKqVF5QVoS5q0Jwevj6y529raiLRrkgRkaDBzXBE2fmWFIaHJCxrgsy/rQaFUWjtIIrPZoAv/Pjb1ifrW4AK6dUrAqufa44yzkzwJqMJ48uXP8rPZZ4UmlWEhLUo5io7rpMXv/ztGQS3aSFIkgeVvOcLcLezrhKtQgag8QYtB6xUQWSlMCpnDTZdxOmDE0AOoqmnF6VtiKCtz4rP/NCDcA6X9vpO6JaBjdz0m3J6Gf11g9EQjiCaCCk3qIShFqk1g6Ns7GXlZGjz9VDugQeE9BSnPzfI2yWL695q0fPT3qP/ojPDrGIVITRil0FZwK1KfABT9ZsN9j5UiqakWVqgLrVVT7wBuu8aMi65PAcpcnjVotBGUBpgi4YnJJXh0foWiYWLCMAWKNUHHZsmJDMXl//AsVRS3huiM9OLfWOb8Ew8nqeOzPiga+XlEzkoVg8+HirS0vo3QmU6DG7BGKTm90CYyfPhJHSZMLcX2HTYkhNsk8WGKQ/kImbkU7eP+O9Mw69HsEHmHMSBn4c1Md+Erh5FUVuP7e3BwNV69CCXsom6/EJAvSSdg8phCTFlYGXfalALeTbgnHU/MyAldJEqmA+uw9ZCddZjBJUjql7jG78N6CRs21+H+h4ux9U+7fA9T4RWZKrGlc+0p96dj4mPZQHUIryklXriDZS46zgvCESQ9yQ1ui8aVkionNWY7RYxM0+CrL+tw571F+H2XXQ47EstEJYLOHJuBceOzFN7JbUZKOrzZk7GTfmmepIXn1MBVaopZ4QpkYCR5ZgnQHLGb7K0r3FHyAxlDKN7xEnVzHW4feRC/73EgSUPBvEPRWGTq9KY1odbnPJKJBx7IBOpDqEEbh8nydxymKA/XpNZXr0fZEysjA4kKWyVBzNHiycnF2L3XeVTqxoQEYN6zuYCLe8yfeLNBCJ9UDb7ZUIvtRU5Mm1qCXYUuJCcEn6kg0tLgJejcCZlIy9Di5htSPJcfwmAutEpSz+ZRVw4eQ5/DQGbbexabqsHMScWYMaccNTZ+lIcTbWxed6UJaSkS5j+XC5RG4blnIPg0fYewIo+wJAlffVyLolo37h19EAerQq9xgu16W+/PmZCFB0amA4nMc9QSBoJSugWWv7tlTSqTtHTU52hY3yf+1ELjlDVqz/lTS/HZD1b85+s61NbzFs04iuxHfhXDh6ZgwfN5QImS7mFtiZGK/u4lq57hm411qLYEHnlPDaNyuIGB/ZIh0eSSpRSWwgHDJT+xrPmnN23uKAON8z2p2H9hJcLukxMWFNpuxChh9rwyzJxXgSqLW3Z6aOuqHMXIpR+ZRAuX5gHFcUpUL7rkb01H0eGS7bZn1f8niBnkRRTWMbiADjsTGGOHBXxqdhXFC7qRf7//A4v2N2hC8hIw4tp9eGGtxa8Qj0RSOui+YYgZzy/IjS6n+Wift5jpvwssf9dRnGyBpMe44yMuwhGza5Qw88kyzFlUAZvVf3ONgj2fcqIO337V1eMqJopAwC8E/CHpwXMPwlncLq7WpY3pE8bceQDzX672S4t658HuAM46VY/Pv+4KFMfhJpJfAikePhwBMl7bVbPczalHItO8JuW/GVEwwAKWGD9ImjSYOaMUUxdUQHIGlp7RG0rj0v7Jnlg3FiVi3cTPFMT3SBuADp92YOy4Az6RlB7ilY++DcvyK8DCfF0kUjOVosH4sUWYubgyIC3q7TZFjTuvVyI+/aRzZBPjRgpH0a7/CJC/vGn4RpY24cLmXm7x+J3z4hwUnF4UN9o0RYNHxhVhxnPBkZTWpX3+lYj16zsDVUKT+i+xcfgGtwJhFB9LAAAVM0lEQVT5/8liLLfML5LK2nRfPhck9V9oiKiX9U/G6xQ9Ll7dBv2HLX7f4FawjgUtKsxWHdn4/i5O8Di5MaiQJiVJI5N3QL8krF3bETq6QxrWs7b4lfXoHDkJh5Oz/D0tXnJunaTViyeiesYUOQVbrBeF1qRemOptwOUXJWPFqx2QaA/3oXisT1YMjY87gZRHnmYpw0e3NKo2XcL5vlwOZowhVFoYilmD6dNKMOXpCmjdvE0vI18AoetNt11lwguvdAAqxPrUF8zi6xkHYDi/jGUty2pt3G2TtOBYB2SP+zYfjW58yerI1GLao8V4cmEleIDHME1BqLcDV19ixKLncpFKYVviOSkVjb9pIbzD5hOrUtHktUD265cww7kfBkfSqmfHoXrGTEjJKh2pgt2SQ4Nocdew/VjyWg2MQVr53utO1w40YuGiXKTTbRG1J2RSEE65KnJQB+SkXN4ip9fQM3Q+RgeQY5ZnWaZ0y+qvz10F1qmkTe3X5gM0Ul74LztcpeRqrv6BB9vDVA2G3VSA5e/UBnVe6u2Gl6g3Xm7EvLntkUlB0GiNGg9Fz7B1S4OczOj0i/eiqcHfMVuDd9/Ih7uWIzVFQpdjdcqHxVQ1xnT/OMvBOnzbZr5730hq/eI8lAz5ApJZ1cNWpHNGCbNml2He4krUWVyKrE29RB02yIQ5T+Yg06yJnrQSgYKayPDTTw04b+Be1Ltw1AePLiTUNsa8O+U4HV5/LR/HdEzwRD7wSSoD7ZhK3uMWMnUvY4be77XVI5/h4H9lcmjS26ov+v9OSq5DAq69ZC/WfKSMNiVQvES99SozZk3PRmZqjBK18cL8N9/WY8CV++CW86W0LBaEi8UGnHaCHiuW5+G4rjpPDCGfJTNKRc5VAXT6wsRYj9q2RuAzFLx4yG7YvusSF8cxyRLmLSjHtNnlqKt3Q6eQZ6SXqMOvMWPGlGxkpsUgUbUMm/5Tj8HX7YfN3vJl+aaCSbjQTnivnno8tygXPbvpYnvtzm2A7l9lrN3qVnd1my6Z2iKy/HdOTvcHrrKAznVi/TPXeCNm4dwyzJxbjspqV6vawCcAGx86RNRrzZj5eDYy2id4djnJzIv2222EW3st/tF1B/bsd4ISaPlavLjcdZ0Zi+jISrE0gr72IFzPkZWgA/LWpTDWvcaXVn3WpDJRK6esRc3iq+Jmpzc/AX1O3YlvfrYhKcid3iM1R7UNGHm9GaeckQRbvRu3XZsCfZYWsn1I5l607S01Rg98790ajH6wGCVlTr/X8zYncPYZiZjxRDbO6mmIzQ02dy1gHPkpy5hwkS8E9S6VfH0WnG9KRcGwSo/J6xe/fW5DVQ8aJCxZXonxk0pgbeCg6IBKFUKPoqF7dzwfGpGKDvkJcNqAu25ORSIFv4omouoZ3njfglFjiuT4RoEsEbzadPTNKZhH0S1i7oICeZ45gPx1XRnrucdXWfKbabxs1HbUv3ssmMHXNqL3OdnBQYNXllVi0uOlstnbVryjQAbrXZN5Odmwqzv0OdrQpTEIpJOtvUMdJ6vjtF34+r8NSA7C6qC16fi70jB9VrsYu5zAAHcFkDzoT5b5/LH+TIH/JLW8cxXKR6yFJs2fdqL3WRLAXC2O7bwDBQec0Pmxzgpk0JSY9s6hqdAbGKZPzQHIU0ftN2kMEl5+rQpTZ5ahqMQJTRDhsWKWpLRZpO9Tx3KW++1j6zdJ5bVpAcXmJYs3TuLzJjC8+YEFo8cVoarG/9hH/pC1qVYddVMKDAaG2fPae0xfWq+qMQh3qgYD+u/Bp980BO2lFbMkJS2auXASSx4y1R958HtN6q2cW56ZjOrnH4fbBrA48EJq3O3t0OEPHChzw6QDWECfN/+mh9ashO4tQ8xwu4DsLA2mP9M+RDkx/evbYU+naDBo0F58sKEehiBMXaozJknKG3d0U+edxEz9t/qLdMCixqunfoiqRRdD8lt7+9tHdTyvYdiwqRZWBzD8vkJYrTwsRKXBUwBu+k4k64CL+5twXGctnpjTXj3xfQVJW5dR2tE1j9zE0iacH4gwB0HSFQNQNeojSDmBtBud75CDvF6CMf131DmPdnUL9aDIMZ1u1iTpGO69Ow1T57b3HNeQ0z6lQQh4NoPsuUIkjdndXVcJkPnMg8w49KlAkA5qWnnF5PdR+8olceGF5EWXAT/83ACHg2Pg9QVyQOxwF5cLSDQwnHpqIqz1HIMGJGP0pOzIaNbGgOJDLvkLb39ch8QgzF2yUq7ob8TsWTnolKmNjats3A6Ybt7A0h77d6ByEhRJ5U2k0mFWWDcZ4uJIxouyjrbTAU377UFvlAQ6cbSH5LB7nJSSjBKeGJuBeydke8KI2rjnF/Ts+tA7k4QJk0rw/MtVsNmC21SjNfh9t6Zg7rN5QPlhmRZ86IgKH+ENgKFfHct+Jag1YdDTyCtnvIKap4ZCyojy5B/+T/LWP2w46d975YQcwZwN+t/y4W/QsU2qSUL7PC1qrcATYzJwze1pfye7pThLoQgM0egGeNOgfVj1Xm3QHywi6ahhKXiaHBnUfuzky6TRjm7aA2uZefw1vjze0jNBk1TWpmVj96JuZce4cBdsiqSGoWC/HRUVbpx58V4YQnyG2tpEe5NGkYbNTJeQkqKR1azFDrz1fHuc1ifJk/pCSf9gswbjxxdh0UtV4K7gN9Jih6TkWdQAJN/4P5Yx45RgCErvKkPSiinPwvLsSEgpwfYn+t5PAMpLXMj85y4kSlDUdTBQMIiotOsvf0ABZKRKsDGGr97IR/eTDJ6NpmAT4lLm80wN7rhpP15YE3wUC+orHb/cfYMZC5/Li25NKjsu9HIhe7WOMRb0Z1ERknq06f1bUf9Gj7hamzayiDaPaqwcu3bZcNrAfYpEdAiUoM29R/0j4pqNkuwNRCFHd3zTFWlZEtB48dqv9kwaTJtSjNlLq+SgbXYHD/prT9EVr7vCiOeX5MVAdMV6wHzLf1jKlF5+4drCw8qRlP+YieLHS2D/lclXceKtEJIahu9/sKLX5ftkhwe1laY70eTJRP8u+O8xcryh1sqRjhvcpMGkCUWYtjC4aP9N26Sz4JuvNuGFlzpEj89ys19EO6DrwZEzvR1jPUuUkAHFSCpr0/KxH6J2zcWQgtiHV2JUkaxDx/DtN/XoN2Q/THrInkIOZ/DrtVANSY6a0IIUkMa9qE/S35H4TRIWP1uB+6eVwpjgyceqVKHjl1uHmLF4SV50336hI5fkIV+xjFm9lcJGUZLKRK2c8Q5ql18OxMHl8FbVD52NSHjz9WrccG8REholmrRSOFwKlRIQeU6PIKPS/SctetVAI1a/nh/FWpSOvBIA87APmXncJUrirzhJ5UktvrEWtq+S49LsPXJ2TBJWr6jCqMmlMBuA2lq3fDc1FFfelBSMcNVFHwAXZ7hhsAlLSItG69ELaVD9OTUsZ6Xiu6ehIWnt82NR9dwsUPDfeAgD2pZE004oXRg3a/DUlBJMmlMuRx3QUsjxkMxAWx1Sz9+tNuDifklY91FnoMSp0HlDuMdHCaPNgPnemcx8y3ilWw+ZiPDSWw7AujE3bqI4+DIzjVHyn3y8GEvfsKC61IEaC4fEEJeEJS0qSQzXDjJh8aK8KE263JjnJ2nQdyxz1r98EQN/nwkdSfl7eSh5bTscPyfHRfAyX5EnopKjfqYWE+8pxAcb65GYCPzxhw0OJwmtrxVF/3OkRXufacDGb7oBhY4o1KI0mRKQOOA3lvn0iaGakZCR1NthfvA8Duc+ACo8kwgVqr7US/ObRN4P5FMo4a6bD2DF6mrYnZA9l2LdDCYPKSq33JiCZ7y3eXzBTVXP2AFNRzfL/TKIWBRtDyj0JC1/aD0aNl4EulMnSvMIEGFztBh56wHs2e/Al1/XgyLnKRmhUE3QE0HJ1B1xcyrmLcqN3vCddJdaf/4nLHNO/1DiG3KSyru9NctnoHrawx7H0bA0GUrMQlM3EdVMphPDHUMPyEHP1n1c57nlEkPHzuT55HICdw1Pw1MLVHRx3a9ZbTRzUydOZ6abJvj1agAPh40xvGT4Ltg2dYV8Z0SUFhGg+U+RZO+lO247gAYbx4p3LPKnjX6U6U1BH4KwTgRpT7sDuPeOVDw5Pzd6d3O5FUi8aCfLWtY9HACGjaSyRj34bxuce3TiWMbHqaWbLE6OkfcchKQBLBY3XnnbgpQoJCoRtMEOPDgyDdNntwPK6NjCRxxU9RgHjDdsZmmPnReuboUVJm5ZfyKqx/4KXi/MXn9mmMgqAbzKjWH3HMSKtz3ZCcgmiRbNStfQJt2Xjsem5XiynodV8vwBu7VnKftUipvl/hhWczDsUPHKVbegZsKLkBQMB6/UHKi9Hi2Dw+rGY/PK5VCfO/+0Y/k7FlBgVbp0rlYzmK6gTX0gAxMezfKEJI3W4rYDmdPvZMnXPx/OIYSdpLLZWzVjIaqfuRuSKZxjjY226BzV5Fmzlu20Y+kbNfj1Zytee//v3XPaZ6LQmmogLRF01rgMjB2fBViimKC8Bkge9RrLmHh9uAUpIiSViWp5YTIqHn48HsOuKDbJFN3eLGH/bw146+M66MkIS5Kwdk0VNn7XIDdDF9EpL0s4CUtCRQmpqMydmIkxYzI9WeOisdAFbjo+TJ8+k5nvUNzlzxdIIkbSv4k6+fG4id3ry4z4+wyxL4F5vJio6Bm2fl2P77fYoDNLmPtUGX7ebkeSxuN6GOriJei8SZlIT9di6A0pnuxo4fxKKDVI7gL0Z9UhaeCDzHTjYqWq9beeiJJUJmrxFXvQ8HVnSJRFPBpn0l/IQ/w8QUiXuIm4OoYfP6/DnnIXJkwsxp8Fh0fgUyoSPwkRZev26sqnJmXh/rvTPR8OigccldPKAFcRkPpuV5bax+cMaKGY3YiTVCZq7coxKH9wrlijKjzFXj9hg4Qfv6xDaXmTrHBahiuu34+GIwjk7/GOV3PSxtDpZybCaeW4uF8yJDLFyXMhWovbAmTMHsOMN86P9BBUQVKZqIW9quD4K8UTzCyKJzfSM9pc+17t2tR5X2L47ss6OCjKH73DgMoqNy67rdDvETw2JgMPjc5AEm1oETGJ+VE7hfRxqQJ03Sys/Tdmv8EIwQuqIalnjbrqbpTfvRAaSl0RtbMcgmkKUZVHxjZycvzwU4NfN3FcbqDHsTokmz2OF1FduBNwlwEZi+6K5Br0SAxVRVIPUZffi4oHnoYUJ/lP1SbVFJ3f30LkjNLN20NDpcgKhnMs0A87jaVc9Ke/EITy+QBmJJTd8dTNS2/5DnUfnQWNMH1Dj7ZoQbb1KalS9rJrWNKgtWpDRJUklYla+/KDKBs7G5pUtWEm+hNrCNAaNGPmOGa89Uk1Dk21JJWJWjVnGizPPAKQD42qu6rGuRV9ahMB2uCyAal3vcjM429r8/EIPaB6yefWdf1QMWUD3JXkCxchmESzsYcA5XPVu5ExcQRLvO5FNY9P9SSVNSp/XYfilQdh/yVdjm0qikAgGATcdYD57vdY2oTLgqkmXO9GBUm9YPDS4Vth/awHWBj828I1A6KdMCNAQaT6bWNZy3qEueGAm4sqkno2lFaOQdW8ueCVjTcqAx67eDGuEKCYvibAPHIOM9/+UDQNPepIKhO1Yuw61L3ZaKq0kswkmmZC9DVECJCDhQbQJHEk9n+bpc0YHKKGQlZtVJJUJmr1U1NhfW8snEUJnri+cRSwNmTiEGsVk3M/A5Iv3MYynosa8/bIWYhakh5ap1Y+uBl1G84FXcqVd3+jfkixxpQIjIe0J4VoSQYSL/mWZcw8OwKdUKzJmJBoXvPqMFjfmQ/7llRBUsVkI4oropvuJzTAcP4yljJqVBQPRO56TJD0kFYtvrQS9q2psokjjmqiXTb97z+ntOUMMN3wA0ubcqb/FajzjZgiqbxWLb/rW9h394LjD8+ExWPWcXXKWuh6Rc7xjAPa4zl0x/7IMhbEDEFjTpMe0qj8m3RUrN0M575/wPZfJrRq6PgR+ZptgO4UDl3HP5F67fmMnX0g8n1Stgcxp0mbwsP5nlQcHFIGZ4FGzozEhA+wsuITwdrI5xYNQPL1vyN9+JmM9YjZZEMxTVLZ/OXrclDx/Qq4Cnqj4SuD8FaKILGUapoIqjvHioSOm1nGzJAmS1Kqy8HUE/MkPUyzVk7chJpFfcGSAGYQZ6vBSE7Y36UzTyvAGwDziJ9Y2szTw96FCDUYVySVNWvV/HFwHRiK+o9PgLsIYImenwjXEiERbK1Z5iElpSWRUoHka7ZCk/UlSxk9UoWdDVmX4o6khzaXal8/Gai+EdYv70D9J0ZZCARRQyZo/ldMIVmqAMNF9dD1XQZtypfMdM0b/tcT/W/ELUkPM4OLryiFdVOmHKRb1qrCxTByok1mLSX00gGG83cja9k/GGP2yPUn8i0LkjbOAa9/5yzYfhmLutcHwV3TuGaN/ATFVQ/kHVsDkHTld0juN44l9v8yrsbfwmAFSY8AhvNv8lCy4HtYP80Fo5SDRnElLqRMcQF0CRt2IPH8GiSN7MOM/f4X0iajrHJB0hYmjPMPzXDhfBRNfR3OHQny0Y1MWGEKBy3j5L4nbwg5AG1XF1IfHgFnzpcs9ZxdQdcdgxUIkvowqZz/ZkRD2akov+8zuMs08hGOKIEhQC58+l7VSL19GHSGzYydXRFYRfHzliCpn3PNq559BJbZU+F2eLCTiLBCu7YII5GSTFm6PcZ0HMaxc1j63WP9hD2uHxckDWL6Od+Zj4PDdsK1VwfQrrCA8284iZW1QNJ1W5B+4+WMnbo3CKjj+lUhVQpMP+ff5+PAqF/gKk6Vb2PIt28oWFo8hSB1edaYsnVB0VdzatBuwYmMnVmgAMRxXYUgaQimn/Mt2Sh/bhXqP+gHaBptYSIukTYWTGM6y3Q1cf5wcSRethmZt1zM2Ol0yCmKgggIkioIZmtVyTdyyue+hYZP+nliMkWbliULgbIyUXLiXtuQ8uCVzHDyjjDBF9fNCJJGYPq59eN+qF6yAs4/c8FpA+rIlIGRTCF4pEhwQJPhguGf26C9fAIzD3wvApDFdZOCpCqbfm757wmwb5oI187T4fylG9zVkkxiTlqMyOv9Ucf9IbN3qul/G39M8vynZHBDc1wppC6/wHj+Ama4QBBRRXIhSKqiyWipK/I5bd3/7oTz4KlwbDsNjuJcoFYHNGg8nCVtTLlN6L9p7UukJgJquLwGpmUw17ugya6GlFKKhH9sgbb9f5F85hLGulOYRVFUjMD/A9PTwEh1x8xKAAAAAElFTkSuQmCC';

class CoolExtension {
  getInfo() {
    return {
      id: 'coolextension',
      name: 'Cool Extension',
      blockIconURI: blockIconURI,
      color1: '#ffae26',
      color2: '#ffae26',
      blocks: [
        {
          opcode: 'e',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'e'
        },
{
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE] ^ [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2'
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2'
            }
          }
        },
{
          opcode: 'sign',
          blockType: Scratch.BlockType.REPORTER,
          text: 'sign of [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '-1'
            }
          }
        },
{
          opcode: 'percentage',
          blockType: Scratch.BlockType.REPORTER,
          text: 'percentage for [ONE] in [TWO]',
          arguments: {
          ONE: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: 25,
          },
          TWO: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: 100,
          }
        }
      },
{
        opcode: 'pi',
        blockType: Scratch.BlockType.REPORTER,
        text: 'pi',
        },
{
        opcode: 'sadIcon',
        blockType: Scratch.BlockType.COMMAND,
        text: 'When you made the extension sad :('
        },
{
          opcode: 'CoOl',
          blockType: Scratch.BlockType.COMMAND,
          text: '[ONE] is cool B)',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Jeff Bezos'
            }
          }
        },
{
          opcode: 'notEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] ≠ [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }, 
              TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            }
          }
        },
{
          opcode: 'xor',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] xor [TWO]',
          arguments: {
            ONE: {
            type: Scratch.ArgumentType.BOOLEAN,
            },
            TWO: {
            type: Scratch.ArgumentType.BOOLEAN,
            }
          }
        },
{
          opcode: 'startsWith',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] starts with [TWO]?',
          arguments: {
          ONE: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: 'Hello there!',
         },
            TWO: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'Hello',
            }
          }
       },
{
          opcode: 'isImposter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'is imposter?'
        },
 {
          opcode: 'execute',
          blockType: Scratch.BlockType.COMMAND,
          text: 'execute javascript code [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'alert("I executed Javascript code!")'
            }
          }
        },
{
          opcode: 'millisecond',
          blockType: Scratch.BlockType.REPORTER,
          text: 'millisecond'
        },
{
          opcode: 'fetchURL',
          blockType: Scratch.BlockType.REPORTER,
          text: 'I have your ip address >:)'
        },
{
          opcode: 'goFetch',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://api.ipify.org/'
            }
          }
        },
{
          opcode: 'ifReport',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if [ONE] then [TWO] else [THREE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: ''
            }, 
              TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            },
            THREE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'false'
            }
          }
        },
{
          opcode: 'typeOf',
          blockType: Scratch.BlockType.REPORTER,
          text: 'type of [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
{
          opcode: 'repeatText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'repeat text [ONE] [TWO] times',
          arguments: {
          ONE: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: 'This is Cool '
            },
          TWO: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: 6,
            }
          }
        },
{
        opcode: 'rickroll',
        blockType: Scratch.BlockType.BOOLEAN,
        text: 'test for [MENU]',
        arguments: {
        MENU: {
        type: Scratch.ArgumentType.NUMBER,
        menu: 'rickMenu'
        }
        }
        },
        {
        opcode: 'crash',
          blockType: Scratch.BlockType.COMMAND,
          text: 'ERROR: Out of Memory'
        },
        {
        opcode: 'yourToSlow',
          blockType: Scratch.BlockType.REPORTER,
          text: '[ONE] mph',
          arguments: {
            ONE: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '10'
            }
          }
        },
        {
        opcode: 'projectId',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get cloud data from [ONE]',
          arguments: {
          ONE: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: '716896214'
          }
          }
        },
        {
        opcode: 'timeConvert',
          blockType: Scratch.BlockType.REPORTER,
          text: 'years since [ONE] in period [TWO]',
          arguments: {
          ONE: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: '1787'
          },
          TWO: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: 'ad'
          }
          }
        }
    ],
      menus: {
        rickMenu: {
            items: ['Women', 'A Perfect Person', 'A Celebrity Near You', 'Minecraft for Free', 'Free Robux']
      }
    }
  };
}
  e() {
    return 'doo doo fart';
  }
  strictlyEquals(args) {
    var x = args.ONE;
    var y = args.TWO;
    return Math.pow(x, y);
  }
  sadIcon() {
  console.clear();
  console.log('You just made the extension sad :( You should be ashamed of yourself.')
  }
  CoOl(args) {
  var z = args.ONE;
  console.log(z + ' is cool!');
  }
  isImposter() {
   var w = Math.floor(Math.random() * 10) + 1;
   return (w == 9 ? 'no' : 'yes');
  }
  sign(args) {
  var v = args.ONE;
  return Math.sign(v);
  }
  notEquals(args){
    var one = args.ONE;
    var two = args.TWO;
    return one != two;
  }
  execute(args) {
  var one = args.ONE;
  eval(one);
  }
  millisecond() {
  const d = new Date();
  let ms = d.getMilliseconds();
  return ms;
  }
  fetchURL() {
    var fetcherurl = "https://api.ipify.org/";
    return fetch(fetcherurl).then(response => response.text());
  }
  goFetch(args) {
    var fetcherurl = args.ONE;
    return fetch(fetcherurl).then(response => response.text());
  }
  ifReport(args) {
    return (args.ONE ? args.TWO : args.THREE);
  }
  typeOf(args) {
  return typeof args.ONE;
  }
  repeatText(args) {
  let text = args.ONE;
  let result = text.repeat(args.TWO);
  return result;
  }
  startsWith(args) {
  let text = args.ONE;
  return text.startsWith(args.TWO);
  }
  percentage(args) {
  return ((args.ONE / 100) * args.TWO).toFixed(2);
}
  rickroll(args) {
  var menu = args.MENU;
  return 'false';
  }
  pi() {
  return Math.PI;
  }
  xor(args) {
  return !(args.ONE || args.TWO);
  }
  crash(){
  var txt = "a";
    while(1){
     txt = txt += "a";
    }
  }
  yourToSlow(args) {
  const a = args.ONE;
  if (a < 767) {
  return "You're too slow!";
  } else {
  return "You're up to speed!";
  }
  }
  projectId(args) {
  var fetcherurl = 'https://clouddata.scratch.mit.edu/logs?projectid=' + args.ONE + '&offset=0&limit=40';
  return fetch(fetcherurl).then(response => response.text());
  }
  timeConvert(args) {
  let year = new Date().getFullYear();
  if (args.TWO == 'ad') {
  return (year - args.ONE);
  } else if (args.TWO == 'bc') {
  let math = year + args.ONE;
  return math;
  }
  }
}

Scratch.extensions.register(new CoolExtension());
